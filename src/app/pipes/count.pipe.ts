import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(data: any[], attr : string): any {
    if(attr != undefined){
      return data.reduce((prevResult, bug)=> bug[attr] ? ++prevResult : prevResult, 0);  
    }
  }

}
