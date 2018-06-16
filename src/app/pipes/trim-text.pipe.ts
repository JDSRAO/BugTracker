import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'  
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.length < 30 ? value : value.substr(0,30) + '...';
  }

}
