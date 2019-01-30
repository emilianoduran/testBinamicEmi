import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  editado = false;
  @Output() additem: EventEmitter<void> = new EventEmitter<void>();
  @Output() editItem: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  add() {
    console.log('add item');
    this.additem.emit();
  }
  edit() {
    this.editItem.emit(true);
  }
}
