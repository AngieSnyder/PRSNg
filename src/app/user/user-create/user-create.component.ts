import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user : User = new User();

  save(): void {
    this.usersvc.add(this.user)
    .subscribe(resp => {
      console.log("resp:", resp);
      this.router.navigateByUrl('/users/list');
//      if (resp.rc == 0) {
 //     }
    })
  }

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
