import { StopClickPropagationDirective } from './stop-click-propagation.directive'

describe('StopClickPropagationDirective', () => {
  it('should create an instance', () => {
    const directive = new StopClickPropagationDirective()
    expect(directive).toBeTruthy()
  })

  describe('#handleClickEvent', () => {
    it('should call stopPropagation', () => {
      const directive = new StopClickPropagationDirective()
      const event: any = {
        callCount: 0,
        stopPropagation() { this.callCount += 1 },
        preventDefault() {}
      }

      directive.handleClickEvent(event as Event)

      expect(event.callCount).toBeGreaterThan(0)
    })
  })
})
