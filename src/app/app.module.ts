import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { InitialAppComponent } from './components/initial-app/initial-app.component';
import { AddButtonComponent } from './components/add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    InitialAppComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
