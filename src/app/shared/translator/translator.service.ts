import { Injectable } from '@angular/core'

import { TranslationScope } from './translation-scope'
import { TranslationUnit } from './translation-unit'

@Injectable({ providedIn: 'root' })
export class RuntimeTranslatorService {
  private data: { [scope: string]: TranslationScope } = {}

  constructor() {}

  load(data: XMLDocument, locale?: string, scope: string = 'default') {
    const _locale = this.localeOrNull(data, locale)

    if (_locale == null) {
      throw new NoLanguageForTranslationUnits()
    }

    const units = Array.from(data.getElementsByTagName('trans-unit'))

    if (this.data[scope] == null) {
      this.data[scope] = {}
    }

    this.data[scope][_locale] = units.map<TranslationUnit>(element => ({
      key: element.getAttribute('id'),
      source: element.getElementsByTagName('source')[0].childNodes[0].nodeValue,
      target: element.getElementsByTagName('target')[0].childNodes[0].nodeValue
    }))

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
}

export class NoLanguageForTranslationUnits extends Error {
  constructor(...args) {
    super(...args)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NoLanguageForTranslationUnits)
    }
  }
}
