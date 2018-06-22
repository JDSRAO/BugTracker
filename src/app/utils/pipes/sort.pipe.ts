import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  private getComparer(attrName : string) : Comparer
  {
    return function (item1 : any, item2 : any) {
      if(item1[attrName] < item2[attrName]) return -1;
      if(item1[attrName] < item2[attrName]) return 1;
      return 0;
    };
  }

  private getDescedningComparer(comparer : Comparer) : Comparer{
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1;
		}
	}

  transform(data: any[], attrName : string, isDecending : boolean): any[] {
    if(!attrName) return data.sort();
    let comparer  = this.getComparer(attrName);
    console.log(`${attrName} - ${isDecending}`);
    if(isDecending) {
      comparer  = this.getDescedningComparer(comparer);
      return data.reverse();
    }	
    return data.sort(comparer);
  }

}

interface Comparer{
  (item1 :any ,  item2 : any) : number
}