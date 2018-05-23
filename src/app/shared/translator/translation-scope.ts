import { TranslationUnit } from './translation-unit'

/**
 * Translation scope (business).
 * Can contain translation unit for many languages.
 */
export interface TranslationScope {
  [language: string]: TranslationUnit[]
}
