import { InjectionToken } from '@angular/core'

export const WINDOW = new InjectionToken<Window>('native-api-window')
export const URL = new InjectionToken<URL>('native-api-url')
export const DOCUMENT = new InjectionToken<Document>('native-api-document')
