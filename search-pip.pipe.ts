import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPip'
})
export class SearchPipPipe implements PipeTransform {

  transform(value:Array<any>,args?:any):any[] {
    return value.sort((a,b)=>{
     let x=a.name.toLowerCase()
     let y=b.name.toLowerCase()
      return x>y?1:x<y?-1:0
    });
 
}
}

