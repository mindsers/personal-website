import { Component } from '@angular/core'

@Component({
  template: `
  <div class="instagram-links">
    <ul class="links">
      <li><a class="amazon" href="https://www.amazon.com/shop/mindsers.it">My favorite products</a></li>
      <li><a class="wiki" href="https://nathanaelcherrier.dev/en/support">How to support MindsersIT?</a></li>
      <li><a class="external" href="https://ghost.org?via=gj8uj">The best blogging platform</a></li>
      <li><a class="external" href="http://www.ledger.com/?r=bdbc">Secure your crypto assets!</a></li>
      <li><a class="external" href="https://freebitco.in/?r=9267442">Let's earn some bitcoin together!</a></li>
    </ul>
  </div>`,
  styleUrls: ['./instagram-links.component.scss']
})
export class InstagramLinksComponent {}
