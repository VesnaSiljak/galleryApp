import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], args:any[]): any[] {
      var searchText = args[0];
      var searchBy = args[1];
        if (!items || !searchText) {
            return items;
        }

        return items.filter(item =>
            item[searchBy].toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }
}
