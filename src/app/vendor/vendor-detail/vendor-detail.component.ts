import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor : Vendor;

  delete(): void {
    this.vendorsvc.remove(this.vendor)
    .subscribe(resp =>{
      console.log("resp", resp);
      this.router.navigateByUrl('/vendor/list');
    })
  }

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id)
    .subscribe(resp =>{
      console.log("resp:", resp);
      this.vendor = resp.data;
    });
  }

}
