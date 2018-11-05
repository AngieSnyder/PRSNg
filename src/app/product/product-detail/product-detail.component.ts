import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute,Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product;

  delete(): void {
    this.productsvc.remove(this.product)
    .subscribe(resp =>{
      console.log("resp", resp);
      this.router.navigateByUrl('/product/list');
    })
  }

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id)
    .subscribe(resp =>{
      console.log("resp:", resp);
      this.product = resp.data;
    });
  }

}
