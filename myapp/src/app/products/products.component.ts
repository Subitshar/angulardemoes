import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allowNewProduct = true;
  productCreationStatus = 'No Product Added';
  productName = '';
  products = [];
  productCreated = false;

  constructor() {}

  ngOnInit(): void {}

  onCreateProduct() {
    this.products.push(this.productName);
    this.productCreationStatus = 'Product Added !';
    this.productCreated = true;
    // console.log(this.products);
  }
}
