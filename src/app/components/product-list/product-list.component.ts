import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() removeItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() editItem: EventEmitter<number> = new EventEmitter<number>();
  public editingStatus = false;
  constructor() {}

  ngOnInit() {}

  public remove(idx: number) {
    console.log('remove Item');
    this.removeItem.emit(idx);
  }
  public edit(idx: number) {
    this.editItem.emit(idx);
    this.editingStatus = true;
  }
}
