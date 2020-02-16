import { NgModule, TRANSLATIONS, LOCALE_ID } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PopinContainerComponent } from './popin/popin-container.component'
import { StopClickPropagationDirective } from './stop-click-propagation.directive'
import { MatchValidatorDirective } from './match-validator.directive'
import { EmailValidatorDirective } from './email-validator.directive'
import { PopinService } from './popin/popin.service'
import { SimplePopinComponent } from './popin/simple-popin.component'
import { WINDOW, DOCUMENT } from './native-api'
import { RuntimeTranslationService } from './translator/translator.service'

declare const require

export function translationsFactory(locale: string) {
  return require(`raw-loader!../../locale/messages.${locale || 'en'}.xlf`)
}

export function translatorFactory(locale: string, translations: string) {
  const translator = new RuntimeTranslationService(locale)
  const parser = new DOMParser()
  const xml = parser.parseFromString(translations, 'text/xml')

  translator.load(xml, locale)

  return translator
}

@NgModule({
  declarations: [
    PopinContainerComponent,
    StopClickPropagationDirective,
    MatchValidatorDirective,
    EmailValidatorDirective,
    SimplePopinComponent
  ],
  imports: [CommonModule],
  exports: [
    PopinContainerComponent,
    StopClickPropagationDirective,
    MatchValidatorDirective,
    EmailValidatorDirective
  ],
  entryComponents: [SimplePopinComponent],
  providers: [
    PopinService,
    { provide: WINDOW, useValue: window },
    { provide: DOCUMENT, useValue: window.document },
    { provide: TRANSLATIONS, useFactory: translationsFactory, deps: [LOCALE_ID]},
    { provide: RuntimeTranslationService, useFactory: translatorFactory, deps: [LOCALE_ID, TRANSLATIONS]}
  ]
})
export class SharedModule {}
