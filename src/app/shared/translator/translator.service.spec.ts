import { TestBed, inject } from '@angular/core/testing'

import { RuntimeTranslatorService, NoLanguageForTranslationUnits } from './translator.service'

describe('RuntimeTranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuntimeTranslatorService]
    })
  })

  it('should be created', inject([RuntimeTranslatorService], (service: RuntimeTranslatorService) => {
    expect(service).toBeTruthy()
  }))

  describe('#load()', () => {
    it('should load data in default scope when no scope is specified',
      inject([RuntimeTranslatorService], (service: RuntimeTranslatorService) => {
        const data = (new DOMParser()).parseFromString(`
        <xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
          <file source-language="en" datatype="plaintext" target="en" original="ng2.template">
            <body>
              <trans-unit id="home.title" datatype="html">
                <source>Welcome to this page</source>
                <target>Welcome to this page</target>
                <context-group purpose="location">
                  <context context-type="sourcefile">app/contact/contact.component.ts</context>
                  <context context-type="linenumber">3</context>
                </context-group>
              </trans-unit>
            </body>
          </file>
        </xliff>
        `, 'text/xml')

        expect(service.load(data))
          .toEqual({
            default: {
              en: [
                { key: 'home.title', source: 'Welcome to this page', target: 'Welcome to this page' }
              ]
            }
          })
      })
    )

    it('should load data in right language',
      inject([RuntimeTranslatorService], (service: RuntimeTranslatorService) => {
        const data = (new DOMParser()).parseFromString(`
        <xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
          <file source-language="en" datatype="plaintext" original="ng2.template">
            <body>
              <trans-unit id="home.title" datatype="html">
                <source>Welcome to this page</source>
                <target>Welcome to this page</target>
                <context-group purpose="location">
                  <context context-type="sourcefile">app/contact/contact.component.ts</context>
                  <context context-type="linenumber">3</context>
                </context-group>
              </trans-unit>
            </body>
          </file>
        </xliff>
        `, 'text/xml')

        expect(() => service.load(data)).toThrow(new NoLanguageForTranslationUnits())
        expect(service.load(data, 'fr')).toEqual({
          default: {
            fr: [
              { key: 'home.title', source: 'Welcome to this page', target: 'Welcome to this page' }
            ]
          }
        })
      })
    )
  })
})
