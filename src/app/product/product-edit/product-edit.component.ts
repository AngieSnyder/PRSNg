import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product : Product;

  save(): void{
    this.productsvc.change(this.product)
    .subscribe(resp => {
      console.log("resp", resp);
      this.router.navigateByUrl('/product/list');
    })
  }
  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id)
    .subscribe(resp =>{
      this.product = resp.data;
    });
  }

}
