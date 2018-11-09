import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];

  constructor(
    private requestsvc: RequestService
  ) { }

  ngOnInit() {
    this.requestsvc.list()
      .subscribe(resp => {
        console.log("Request:", resp);
        this.requests = resp.data;
      });
  }

}
