import { Directive, HostListener } from '@angular/core'

@Directive({
  selector: '[appStopClickPropagation]'
})
export class StopClickPropagationDirective {
  @HostListener('click', ['$event'])
  handleClickEvent(event: Event): void {
    event.preventDefault()
    event.stopPropagation()
  }
}
