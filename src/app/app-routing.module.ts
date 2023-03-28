import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { FullItemComponent } from './components/full-item/full-item.component';
import { CreateItemComponent } from './components/create-item/create-item.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'items/:id', component: FullItemComponent},
  {path: 'create-item', component: CreateItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
