import { Injectable } from '@angular/core'

import { TranslationScope } from './translation-scope'
import { TranslationUnit } from './translation-unit'

@Injectable({ providedIn: 'root' })
export class RuntimeTranslatorService {
  private data: { [scope: string]: TranslationScope } = {}

  constructor() {}

  load(data: XMLDocument, locale?: string, scope: string = 'default') {
    const xmlLocale = locale || data.getElementsByTagName('file')[0].getAttribute('target')

    if (xmlLocale == null) {
      throw new NoLanguageForTranslationUnits()
    }

    const units = Array.from(data.getElementsByTagName('trans-unit'))

    if (this.data[scope] == null) {
      this.data[scope] = {}
    }

    this.data[scope][xmlLocale] = units.map<TranslationUnit>(element => ({
      key: element.getAttribute('id'),
      source: element.getElementsByTagName('source')[0].childNodes[0].nodeValue,
      target: element.getElementsByTagName('target')[0].childNodes[0].nodeValue
    }))

    return this.data
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
