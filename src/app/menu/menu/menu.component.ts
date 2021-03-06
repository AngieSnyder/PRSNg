import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu('Home','/home',"The Home Page"),
    new Menu('Users','/user/list',"The User List"),
    new Menu('Vendors','/vendor/list',"The Vendor List"),
    new Menu('Products', '/product/list', "The Product List"),
    new Menu('Requests', '/request/list', "The Purchase Request List"),
    new Menu('About','/about',"The About Page")
  ];

  constructor() { }

  ngOnInit() {
  }

}
