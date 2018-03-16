import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'

@Injectable()
export class ResumeService {
  getExperiences(): Observable<any[]> {
    return Observable.of(EXPERIENCES)
  }
}

const EXPERIENCES = [
  {
    title: 'Javascript Development Trainer',
    company: 'Econocom',
    location: 'Lyon',
    duration : {
      start: '04/2017'
    },
    description: `
      Training and development support for Javascript technologies:
      ES6+, AngularJS, Angular, Reactive JS (RxJS)
    `,
    link: 'http://econocom.com/'
  },
  {
    title: 'Mobile & Web Development Engineer',
    company: 'Econocom',
    location: 'Lyon',
    duration : {
      start: '11/2015'
    },
    description: `
      iOS application development with Obj-C and Swift 2.
      Single page application development with Javascript (ES6), Angular 2+.
      Web application development with PHP, Symfony 2.
      Hybride application development for iOS/Android devices with Cordova.
    `,
    link: 'http://econocom.com/'
  },
  {
    title: 'Web Developer',
    company: 'Winciel by Europa-Techna',
    location: 'Lyon',
    duration : {
      start: '08/2013',
      end: '10/2015'
    },
    description: `
    Development of a professional intranet for the company’s clients.
    The Intranet is teamed with an ERP software developed and commercialized by Winciel.
    Whatever changes on the ERP is also changed on the Intranet.
    Responsible for the development of a project which will fit heating professionals’ needs. Project supervisor.
    Intervention to fix client’s problems.
    `,
    link: 'http://winciel.fr/'
  },
  {
    title: 'iOS Developer',
    company: 'Nathanaël Cherrier',
    link: 'https://nathanaelcherrier.com',
    location: 'Lyon',
    duration : {
      start: '06/2014',
      end: '06/2014'
    },
    description: `
    Creation of an iOS app to calculate VAT called CheckyourVAT.
    It allows to quickly go from VAT inclusive price to non-VAT inclusive one.
    You can also do it the other way around.
    Different VAT are taken into account and the user can choose to add other VAT that are more specific to his needs.
    This application is available on iPhone and has been developed using Objective-C
    `,
  },
  {
    title: 'iOS Developer',
    company: 'Nathanaël Cherrier',
    link: 'https://nathanaelcherrier.com',
    location: 'Lyon',
    duration : {
      start: '01/2014',
      end: '02/2014'
    },
    description: `
    Development of a conversion iOS app which is mostly about European conversion. European Converter displays exchange
    rates updated when launching the app or after user asks for it (Internet connection is required).
    The app calculates fixed costs and variable costs of the chosen bank or foreign exchange counter.
    The user is not forced to use a defined rates provider (such as Yahoo ! Finance, Themoneyconverter,
      Google Finance…). The app manages different rates provider and the user can chose within the list.
    This application is available on iPhone and has been developed using Objective-C.
    `,
  },
  {
    title: 'iOS Developer',
    company: 'Nathanaël Cherrier',
    link: 'https://nathanaelcherrier.com',
    location: 'Lyon',
    duration : {
      start: '10/2013',
      end: '10/2013'
    },
    description: `
    Creation of a digital version of the well-known boardgame « MasterMind » for iOS platform.
    Integration of social tools. Scores managing. Entirely customizable game. Possibility to buy design packs.
    iAD integration.
    This app has been entirely re-developed with Swift in August 2014.
    `,
  },
  {
    title: 'Web Developer & Web Designer',
    company: 'Cool Location',
    location: 'La Réunion',
    duration : {
      start: '05/2013',
      end: '05/2013'
    },
    description: `
    Development of the company's website. Website presenting the rental car company, its location on a map and its prices.
    It is a static website which is developed in HTML5 and CSS3. Utilisation of JavaScript to integrate the Google map.
    `
  },
  {
    title: 'Windows 8 Developer',
    company: 'Nathanaël Cherrier',
    location: 'La Réunion',
    duration : {
      start: '04/2013',
      end: '04/2013'
    },
    description: `
    Creation of a Windows 8 app using C#.NET and XAML to allow people reading my blogs
    to access my articles directly from their Windows 8 tablets. It is a RSS feed reader.
    Developed for the Microsoft Student Partner (MSP) program.
    `,
    link: 'https://nathanaelcherrier.com'
  },
  {
    title: 'Web Developer & Web Designer',
    company: 'Run Ice',
    location: 'La Réunion',
    duration : {
      start: '02/2013',
      end: '02/2013'
    },
    description: `
    Development of the company's website. Website presenting the ice cream saler specialized in frozen yogurt,
    its restaurants location and its prices.
    It is a static website which is develiped in HTML5 and CSS3.
    `
  },
  {
    title: 'Web Developer & Web Designer',
    company: 'Crédit Agricole',
    location: 'La Réunion',
    duration : {
      start: '01/2012',
      end: '05/2013'
    },
    description: `
    Retro-Engineering on a Wordpress theme bought to save interesting functions.
    Development and design of a Wordpress theme.
    Development of a website for the members' capital of the bank.
    Creation of advertising displays for the Crédit Agricole's website
    `,
    link: 'http://www.ca-reunion.fr/'
  },
  {
    title: 'Web Developer & Web Designer',
    company: 'Emma et la Photographie',
    location: 'La Réunion',
    duration : {
      start: '10/2012',
      end: '10/2012'
    },
    description: `
    Creation of a PortFolio for a photgrapher. This website allows to file and to arrange photographs in HD.
    This website uses Symfony 2 for the server part and jQuery for the animation (horizontal scroll).
    `
  }
]
