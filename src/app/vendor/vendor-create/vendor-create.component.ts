import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  save(): void {
    this.vendorsvc.add(this.vendor)
    .subscribe(resp =>{
      console.log("resp:", resp);
      this.router.navigateByUrl('/vendor/list');
    });
  }

  constructor(
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
