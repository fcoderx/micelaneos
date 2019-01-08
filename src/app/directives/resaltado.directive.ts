import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

    constructor(private _elem: ElementRef) { }

    @Input("appResaltado") nuevoColor: string;

    @HostListener('mouseenter') mouseEntro() {
        /* this._elem.nativeElement.style.backgroundColor = 'orange'; */
        this.resaltar(this.nuevoColor || 'yellow');
    }

    @HostListener('mouseleave') mouseSalio() {
        this.resaltar(null);
    }

    private resaltar(color: string) {
        this._elem.nativeElement.style.backgroundColor = color;
    }

}
