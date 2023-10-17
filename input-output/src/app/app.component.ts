import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'input-output';

  items = ['item1', 'item2', 'item3', 'item4'];

  kienAddItem(newItem: string) {
    this.items.push(newItem);
  }

  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }
}
