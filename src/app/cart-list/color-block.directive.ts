import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundBlock]',
})
export class ColorBlockDirective {
  constructor(renderer: Renderer2, elmRef: ElementRef) {
    renderer.setStyle(elmRef.nativeElement, 'background-color', 'green');
  }
}
