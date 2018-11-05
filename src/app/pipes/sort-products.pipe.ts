import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.class';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(product: Product[]): Product[] {
    console.log("sort products:", product)
    let sortColumn = "name";
    return product.sort(compareFn);

    function compareFn(a,b){
      var x = (a[sortColumn]).toUpperCase();
      var y = (b[sortColumn]).toUpperCase();
      if (x==y) return 0;
      if (x < y) return -1;
      else
        return 1;
    }
  }
}
