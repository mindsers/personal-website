import { Component, OnInit } from '@angular/core'

import { PopinService } from './shared/popin/popin.service'
import { ContactComponent } from './contact/contact.component'
import { RuntimeTranslatorService } from './shared/translator/translator.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private translator: RuntimeTranslatorService,
    private popinService: PopinService
  ) {}

  ngOnInit() {
    this.loadTranslatedStrings()
  }

  handleOnContactButtonClick() {
    this.popinService.openPopin(ContactComponent)
  }

  loadTranslatedStrings() {
    this.translator.load((new DOMParser).parseFromString(`
    <xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
      <file source-language="en" target="en" datatype="plaintext">
        <body>
          <trans-unit id="popin.default-message">
            <source>This is the default popin. You might have forgotten to customize your popin.</source>
            <target>This is the default popin. You might have forgotten to customize your popin.</target>
          </trans-unit>
          <trans-unit id="resume.file.error">
            <source>An error occured. We are unable to open the resume.</source>
            <target>An error occured. We are unable to open the resume.</target>
          </trans-unit>
          <trans-unit id="contact.result.error">
            <source>An error occured when trying to send the message.</source>
            <target>An error occured when trying to send the message.</target>
          </trans-unit>
          <trans-unit id="contact.result.success">
            <source>Your message has been send.</source>
            <target>Your message has been send.</target>
          </trans-unit>
          <trans-unit id="error-page.404.message">
            <source>Oups! It seems like we didn't find what you want.</source>
            <target>Oups! It seems like we didn't find what you want.</target>
          </trans-unit>
          <trans-unit id="error-page.500.message">
            <source>An unknown error occured. Sorry for trouble.</source>
            <target>An unknown error occured. Sorry for trouble.</target>
          </trans-unit>
        </body>
      </file>
    </xliff>
    `, 'text/xml'))

    this.translator.load((new DOMParser).parseFromString(`
    <xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
      <file source-language="en" target="fr" datatype="plaintext">
        <body>
          <trans-unit id="popin.default-message">
            <source>This is the default popin. You might have forgotten to customize your popin.</source>
            <target>Ceci est la popin par défaut. Vous avez peut-être oublié de paramétrer votre popin.</target>
          </trans-unit>
          <trans-unit id="resume.file.error">
            <source>An error occured. We are unable to open the resume.</source>
            <target>Il y a eu une erreur. Nous ne somme pas capable d'ouvrir le CV.</target>
          </trans-unit>
          <trans-unit id="contact.result.error">
            <source>An error occured when trying to send the message.</source>
            <target>Nous avons rencontré une erreur pendant l'envoie du message.</target>
          </trans-unit>
          <trans-unit id="contact.result.success">
            <source>Your message has been send.</source>
            <target>Votre message a été correctement envoyé.</target>
          </trans-unit>
          <trans-unit id="error-page.404.message">
            <source>Oups! It seems like we didn't find what you want.</source>
            <target>Oups! On dirait bien que nous n'arrivons pas à trouver ce que vous voulez voir.</target>
          </trans-unit>
          <trans-unit id="error-page.500.message">
            <source>An unknown error occured. Sorry for trouble.</source>
            <target>Une erreur inconnue s'est produite. Excusez-nous pour le dérangement.</target>
          </trans-unit>
        </body>
        </body>
      </file>
    </xliff>
    `, 'text/xml'))
  }
}
