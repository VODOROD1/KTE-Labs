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

  public addItemHandler(status: string) {
    debugger;
    let newObj: ItemClass = {
      id: 4,
      title: 'Гречка',
      amount: 1,
      description: 'Этот продукт явяляется гречкой',
      shortDescription: 'Гречка',
      attributes: ["attr1", "attr2", "attr3", "attr4", "attr5"],
      price: 100,
      createdAt: new Date(),
      image:
        "http://archive.brightmedia.ua/userfiles/image/1td/2009_prigotov/pack-prigotov.jpg",
    };

    this.storeService.addItem(newObj);
  }

  public removeItemHandler(id: number) {
    this.storeService.removeItem(id);
  }
}
