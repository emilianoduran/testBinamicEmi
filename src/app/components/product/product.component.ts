import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productsList: Product[] = [];
  indexProductSelected: number;
  form = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    quantity: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.form);
  }

  public addProduct() {
    console.log(this.form.value);
    this.productsList.push(this.form.value);
    this.form.reset();
    console.log(this.productsList);
  }
  public deleteProduct(idx: number) {
    this.productsList.splice(idx, 1);
  }
  public editProduct(idx: number) {
    this.indexProductSelected = idx;
    const product: Product = this.productsList[idx];
    this.form.setValue(product);
    this.productsList[idx] = product;
  }
  private generateId() {}
}
