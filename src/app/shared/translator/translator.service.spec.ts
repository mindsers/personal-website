import { TestBed, inject } from '@angular/core/testing'
import { LOCALE_ID } from '@angular/core'

import { RuntimeTranslatorService, NoLanguageForTranslationUnits } from './translator.service'

describe('RuntimeTranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuntimeTranslatorService, { provide: LOCALE_ID, useValue: 'fr' }]
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

    it('should load data in right language', inject([RuntimeTranslatorService], (service: RuntimeTranslatorService) => {
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

  describe('#translate()', () => {
    const parser = new DOMParser()
    const dataEn = parser.parseFromString(`
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
    const dataFr = parser.parseFromString(`
      <xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
        <file source-language="en" datatype="plaintext" original="ng2.template">
          <body>
            <trans-unit id="home.title" datatype="html">
              <source>Welcome to this page</source>
              <target>Bienvenue sur cette page</target>
              <context-group purpose="location">
                <context context-type="sourcefile">app/contact/contact.component.ts</context>
                <context context-type="linenumber">3</context>
              </context-group>
            </trans-unit>
          </body>
        </file>
      </xliff>
      `, 'text/xml')

    it('should return the key when no mathing unit were found', inject([RuntimeTranslatorService], (service: RuntimeTranslatorService) => {
      expect(service.translate('home.welcome')).toEqual('home.welcome')
    }))

    it('should return the target string', inject([RuntimeTranslatorService], (service: RuntimeTranslatorService) => {
      service.load(dataFr, 'fr')
      expect(service.translate('home.title')).toEqual('Bienvenue sur cette page')
    }))

    it('should choose user locale in many unit list', inject([RuntimeTranslatorService], (service: RuntimeTranslatorService) => {
      service.load(dataEn)
      service.load(dataFr, 'fr')

      expect(service.translate('home.title')).toEqual('Bienvenue sur cette page')
    }))
  })
})
