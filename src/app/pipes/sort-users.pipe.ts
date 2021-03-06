import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(user: User[]): User[] {
    console.log("sort users:", user)
    let sortColumn = "lastName"
    return user.sort(compareFn);

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
