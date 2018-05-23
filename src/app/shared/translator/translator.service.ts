import { Injectable } from '@angular/core'

import { TranslationScope } from './translation-scope'
import { TranslationUnit } from './translation-unit'

@Injectable({ providedIn: 'root' })
export class RuntimeTranslatorService {
  private data: { [scope: string]: TranslationScope } = {}

  constructor() {}

  load(data: XMLDocument, scope: string = 'default') {
    const units = Array.from(data.getElementsByTagName('trans-unit'))

    this.data[scope] = {
      en: units.map<TranslationUnit>(element => ({
        key: element.getAttribute('id'),
        source: element.getElementsByTagName('source')[0].childNodes[0].nodeValue,
        target: element.getElementsByTagName('target')[0].childNodes[0].nodeValue
      }))
    }

    return this.data
  }
}

