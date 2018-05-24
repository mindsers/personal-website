import { Injectable, Inject, LOCALE_ID } from '@angular/core'

import { TranslationScope } from './translation-scope'
import { TranslationUnit } from './translation-unit'

@Injectable({ providedIn: 'root' })
export class RuntimeTranslatorService {
  private data: { [scope: string]: TranslationScope } = {}

  constructor(@Inject(LOCALE_ID) private userLocale: string) {}

  translate(key: string, scope: string = 'default'): string {
    const { [scope]: { [this.userLocale]: units = [] } = {} } = this.data
    const unit = units.find(el => el.key === key)

    if (unit == null) {
      return key
    }

    return unit.target
  }

  load(data: XMLDocument, locale?: string, scope: string = 'default') {
    const _locale = this.localeOrNull(data, locale)

    if (_locale == null) {
      throw new NoLanguageForTranslationUnits()
    }

    const units = this.loadFromXML(data)

    if (units.length < 1) {
      return this.data
    }

    this.prepareScope(scope)

    this.data[scope][_locale] = units

    return this.data
  }

  private localeOrNull(document: XMLDocument, locale?: string): string {
    if (locale != null) {
      return locale
    }

    const files = Array.from(document.getElementsByTagName('file'))

    if (files.length !== 1) {
      return null
    }

    const target = files.shift().getAttribute('target')

    if (target == null) {
      return null
    }

    return target
  }

  private loadFromXML(document: XMLDocument): TranslationUnit[] {
    return Array
      .from(document.getElementsByTagName('trans-unit'))
      .map<TranslationUnit>(element => ({
        key: element.getAttribute('id'),
        source: element.getElementsByTagName('source')[0].childNodes[0].nodeValue,
        target: element.getElementsByTagName('target')[0].childNodes[0].nodeValue
      }))
  }

  private prepareScope(scope: string): void {
    if (scope == null) {
      return
    }

    if (this.data[scope] == null) {
      this.data[scope] = {}
    }
  }
}

export class NoLanguageForTranslationUnits extends Error {
  constructor(...args) {
    super(...args)
  }
}
