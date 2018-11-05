import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestReviewDetailComponent } from './request/request-review-detail/request-review-detail.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'product/list', component: ProductListComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },

  { path: 'request/list', component: RequestListComponent },
  { path: 'request/create', component: RequestCreateComponent },
  { path: 'request/detail/:id', component: RequestDetailComponent },
  { path: 'request/edit/:id', component: RequestEditComponent },
  { path: 'request/lines/:id', component:RequestLinesComponent },
  { path: 'request/review-list', component:RequestReviewListComponent },
  { path: 'request/review-detail/:id', component:RequestReviewDetailComponent },

  { path: 'user/list', component: UserListComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  
  
  { path: 'vendor/list', component: VendorListComponent },
  { path: 'vendor/create', component: VendorCreateComponent },
  { path: 'vendor/detail/:id', component: VendorDetailComponent },
  { path: 'vendor/edit/:id', component: VendorEditComponent},

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component:UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
