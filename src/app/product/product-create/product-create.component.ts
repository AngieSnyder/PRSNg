import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();

  save(): void {
    this.productsvc.add(this.product)
    .subscribe(resp =>{
      console.log("resp:", resp);
      this.router.navigateByUrl('/product/list');
    });
  }

  constructor(
    private productsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
