import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutComponent } from './item-out/item-out.component';
import { InOutComponent } from './in-out/in-out.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemOutComponent,
    InOutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
