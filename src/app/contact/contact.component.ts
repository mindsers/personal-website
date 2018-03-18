import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ngOnInit() {}

  handleSubmit(form: NgForm) {}
}
