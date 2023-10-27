import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[uiInputRestriction]'
})
export class B3OnlyIntegerDirective {
  inputElement!: ElementRef;
  @Input() restrictionType: 'int' | 'float' = 'int';

  constructor(
    el: ElementRef
  ) {
    this.inputElement = el;
  }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    if (!this.isValidKey(event.key)) {
      event.preventDefault();
    }
  }

  private isValidKey(key: string): boolean {
    if (this.restrictionType === 'int') {
      return /^[0-9]$/.test(key);
    } else if (this.restrictionType === 'float') {
      return /^[0-9.]$/.test(key);
    }
    return true;
  }

}
