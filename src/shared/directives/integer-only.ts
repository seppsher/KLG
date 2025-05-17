import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appIntegerOnly]',
})
export class IntegerOnlyDirective {
  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 45) {
      event.preventDefault();
    }
  }
}
