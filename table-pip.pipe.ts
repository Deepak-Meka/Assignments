import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablePip'
})
export class TablePipPipe implements PipeTransform {

  transform(value:any,args?:any):any[]{
    if(args!==''){
      return value.filter((info: { name: string; })=>info.name.startsWith(args))
    }
    else return value
  }

}
