import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-out',
  templateUrl: './item-out.component.html',
  styleUrls: ['./item-out.component.css'],
})
export class ItemOutComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addItemNew(value: string) {
    this.newItemEvent.emit(value);
  }
}
