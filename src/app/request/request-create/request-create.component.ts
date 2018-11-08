import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  user: User = null;
  request: Request = new Request();

  save(): void{
    this.requestsvc.create(this.request)
    .subscribe(resp =>{
      console.log("resp:", resp);
      this.router.navigateByUrl('/request/list');
    });
  }

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
