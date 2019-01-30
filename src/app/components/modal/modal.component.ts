import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() productIndex: number;
  @Input() editingStatus = false;
  @Output() additem: EventEmitter<void> = new EventEmitter<void>();
  @Output() editItem: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  add() {
    console.log('add item');
    this.additem.emit();
  }
  edit() {
    console.log('editar');
    this.editItem.emit(this.productIndex);
    console.log(this.productIndex);
  }
}
