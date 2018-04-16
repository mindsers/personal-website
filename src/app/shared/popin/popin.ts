import { InjectionToken } from '@angular/core'
import { PopinContainerComponent } from './popin-container.component'

export const POPIN_DATA = new InjectionToken<any>('popin.data')
export const POPIN_VIEWREF = new InjectionToken<PopinContainerComponent>('popin.viewref')
