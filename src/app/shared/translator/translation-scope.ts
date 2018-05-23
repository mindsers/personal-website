import { TranslationUnit } from './translation-unit'

export interface TranslationScope {
  [language: string]: TranslationUnit[]
}
