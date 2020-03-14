import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('f',{static: false}) signform: NgForm;
  //child to parent data send 
  constructor() { }

  ngOnInit() {
  }
  log() {
    console.log(this.signform);
    console.log(this.signform.value);
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
