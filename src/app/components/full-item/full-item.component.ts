import { Component, OnInit } from '@angular/core';
import { ItemClass } from 'src/app/model/itemClass';
import { StoreService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-full-item',
  templateUrl: './full-item.component.html',
  styleUrls: ['./full-item.component.scss'],
})

export class FullItemComponent implements OnInit {
  public item: ItemClass;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.item = this.storeService.getItem(1);
  }
}
