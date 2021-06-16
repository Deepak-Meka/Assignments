import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTableDir]'
})
export class TableDirDirective {
  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor:string
  constructor(el:ElementRef,ren:Renderer2) { 
       this.color='orange'
       this.bgcolor='purple'
}
@HostListener('mouseover') onMouseOver(){
  this.color='red'
  this.bgcolor='green'
}
@HostListener('mouseleave') onMouseLeave(){
  this.color='yellow'
  this.bgcolor='blue'
}
}
