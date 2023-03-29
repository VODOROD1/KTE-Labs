import { Component, OnInit } from '@angular/core';
import { ItemClass } from 'src/app/model/itemClass';
import { StoreService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  ngOnInit() {}

  formSubmitHandler(data: any) {
    console.log(data);
    debugger;

    let newObj: ItemClass = new ItemClass(
      4,
      data.title,
      data.amount,
      data.description,
      data.shortDescription,
      [
        `${data.title}1`,
        `${data.title}2`,
        `${data.title}3`,
        `${data.title}4`,
        `${data.title}5`,
      ],
      data.price,
      data.date,
      'http://archive.brightmedia.ua/userfiles/image/1td/2009_prigotov/pack-prigotov.jpg',
    );

    this.storeService.addItem(newObj);
    debugger;
  }
}
