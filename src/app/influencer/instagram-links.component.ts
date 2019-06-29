import { Component } from '@angular/core'

@Component({
  template: `
  <div class="instagram-links">
    <ul class="links">
      <li><a class="amazon" href="#">My favorite products</a></li>
      <li><a class="wiki" href="#">How to support MindsersIT?</a></li>
      <li><a class="external" href="#">The best blogging platform</a></li>
      <li><a class="external" href="#">Secure your crypto assets!</a></li>
      <li><a class="external" href="#">Let's earn some bitcoin together!</a></li>
    </ul>
  </div>`,
  styleUrls: ['./instagram-links.component.scss']
})
export class InstagramLinksComponent {}
