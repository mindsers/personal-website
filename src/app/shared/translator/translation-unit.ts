
/**
 * An unnit of translation exactly transposed from xml :
 *
 * ```
 * <trans-unit id="74697d73b94ed9da271a1c5a8c8610dcb8ee0082">
 *  <source>Leave me a message</source>
 *  <target>Ecrivez-moi</target>
 * </trans-unit>
 * ```
 */
export interface TranslationUnit {
  /**
   * trans-unit id attribute
   */
  key: string

  /**
   * trans-unit source child tag
   */
  source: string

  /**
   * trans-unit target child tag
   */
  target: string
}
