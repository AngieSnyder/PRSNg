import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  save(): void {
    this.requestsvc.add(this.request)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/request/List');
      });
  }
  
  constructor(
    private requestsvc: RequestService,
    private router: Router
  ) { }

  ngOnInit() {    
  }

}
 