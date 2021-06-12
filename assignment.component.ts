import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent  {
  res:any;
add(a:any,b:any){
  this.res=Number(a)+Number(b)
}
sub(a:any,b:any){
 this.res=a-b
}
mul(a:any,b:any){
  this.res=a*b
}
div(a:any,b:any){
  this.res=a/b
}
}
