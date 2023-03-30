import { Component, OnInit } from '@angular/core';
import { ItemClass } from 'src/app/model/itemClass';
import { StoreService } from 'src/app/services/store-service/store-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  public items: ItemClass[];

  constructor(private storeService: StoreService) {
    this.items = this.storeService.getItems();
  }

  ngOnInit() {
    
  }

  public addItemHandler() {
    let newObj: ItemClass = {
      id: "1",
      title: "Новый продукт1",
      amount: 3,
      description: "Данный продукт является в количестве трех штук",
      attributes: ["attr1", "attr2", "attr3", "attr4", "attr5"],
      shortDescription: "Новый продукт1",
      price: 50,
      createdAt: new Date(),
      image:
        "https://kalach-na-donu.diamondelectric.ru/images/3332/3331263/moloko_prostokvashino_yltrapasterizovannoe_32_950_ml_1.jpg",
      }

    debugger;
    this.storeService.addItem(newObj);
  }
}
