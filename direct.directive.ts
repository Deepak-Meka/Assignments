import { Directive, ElementRef, HostBinding, HostListener,  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirect]'
})
export class DirectDirective {
  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor:string
  constructor(el:ElementRef,ren:Renderer2) { 
       this.color='orange'
       this.bgcolor='purple'
}
@HostListener('mouseover') onMouseOver(){
  this.color='green'
  this.bgcolor='yellow'
}
@HostListener('mouseleave') onMouseLeave(){
  this.color='blue'
  this.bgcolor='red'
}
}
