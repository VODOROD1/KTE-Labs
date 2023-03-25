import { Component, OnInit } from '@angular/core';
import { ItemClass } from 'src/app/model/itemClass';
import { StoreService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  public items: ItemClass[];

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.items = this.storeService.getItems();
  }

  public addItemHandler() {
    debugger;
    let newObj: ItemClass = {
      id: 6,
      title: 'Item 6',
    };

    this.storeService.addItem(newObj);
  }

  public removeItemHandler(id: number) {
    this.storeService.removeItem(id);
  }
}
