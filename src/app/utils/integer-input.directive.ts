import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[onlyPositiveInteger]'
})
export class B3OnlyIntegerDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    if (numericValue !== inputValue) {
      this.renderer.setProperty(event.target, 'value', numericValue);
    }
  }
}
