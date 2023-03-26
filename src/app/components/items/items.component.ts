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
      addedToCart: false,
      createdAt: new Date(),
      images: [
        "http://archive.brightmedia.ua/userfiles/image/1td/2009_prigotov/pack-prigotov.jpg",
        "https://www.deloks.ru/upload/iblock/3a7/m933l8zqszxwhldrty9tie17b71q4l0n/grechka_natsional_yadritsa_900_g_1_full.jpg",
        "http://www.kakraz.ru/upload/iblock/647/6470b314e4e886e87d18ec96c6ed6d9b.jpg"
      ]
    };

    this.storeService.addItem(newObj);
  }

  public removeItemHandler(id: number) {
    this.storeService.removeItem(id);
  }
}
