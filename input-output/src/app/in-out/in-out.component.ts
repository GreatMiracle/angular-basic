import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css'],
})
export class InOutComponent {
  @Input({ required: true }) item!: string;
  @Output() deleteRequest = new EventEmitter<string>();

  lineThrough = '';

  delete() {
    console.warn('Child says: emitting item deleteRequest with', this.item);
    this.deleteRequest.emit('đây là param được xử lí trong child ');
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
