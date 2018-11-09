import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-detail',
  templateUrl: './request-review-detail.component.html',
  styleUrls: ['./request-review-detail.component.css']
})
export class RequestReviewDetailComponent implements OnInit {

  userId: number;
  request: Request[];

  constructor(
    private requestsvc:RequestService
  ) { }

  ngOnInit() {
    this.requestsvc.review(this.userId)
    .subscribe(resp =>{
      console.log("request:", resp);
      this.request = resp.data;
    });
  }

}
