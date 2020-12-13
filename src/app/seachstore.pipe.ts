import { Pipe, PipeTransform } from '@angular/core';
import { store } from './model/store';

@Pipe({
  name: 'seachstore'
})
export class SeachstorePipe implements PipeTransform {

  transform(stores: store[], searchName: string): store[] {
    if(!store || !searchName){
      return stores;
    }
    return stores.filter(store => store.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()));
  }

}
