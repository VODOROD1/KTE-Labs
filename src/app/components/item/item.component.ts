import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ItemClass } from 'src/app/model/itemClass';
import { StoreService } from 'src/app/services/store-service/store-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ItemComponent {
  @Input() data: ItemClass;

  constructor(private storeService: StoreService) {

  }

  public minusItemHandler(id: any) {
    debugger;
    this.storeService.removeItem(id)
  }
}
