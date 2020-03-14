import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  log() {
    //console.log(this.signform);
   // console.log(this.signform.value);
    // console.log(f.value);
  }
  OnSubmit(form) {
    console.log(form);
    console.log(form.value);
  }
  logIt(f) {
    console.log(f)
    console.log(f.control)
    console.log('value: ' + f.control.value)
    console.log('touched: ' + f.control.touched)
    console.log('untouched: ' + f.control.untouched)
    console.log('dirty: ' + f.control.dirty)
    console.log('pristine: ' + f.control.pristine)
    console.log('valid: ' + f.control.valid)
    console.log('invalid: ' + f.control.invalid)
    console.log('+++++++++++++++++++++++++++++')
  }

}
