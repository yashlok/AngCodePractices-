import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective {

  constructor(elem: ElementRef) { 

    elem.nativeElement.style.backgroundColor="Cyan";
  }

}
