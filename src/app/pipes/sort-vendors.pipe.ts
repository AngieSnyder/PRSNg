import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';

@Pipe({
  name: 'sortVendors'
})
export class SortVendorsPipe implements PipeTransform {

  transform(vendor: Vendor[]): Vendor[]{
    console.log("sort vendors:", vendor)
    let sortColumn = "name";
    return vendor.sort(compareFn);

    function compareFn(a,b){
      var x = (a[sortColumn]).toUpperCase();
      var y = (b[sortColumn]).toUpperCase();
      if (x===y) return 0;
      if (x < y) return -1;
      else
        return 1;
    }
  }
}
