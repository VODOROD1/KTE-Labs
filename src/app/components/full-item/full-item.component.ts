import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemClass } from 'src/app/model/itemClass';
import { StoreService } from 'src/app/services/store-service/store-service.service';

@Component({
  selector: 'app-full-item',
  templateUrl: './full-item.component.html',
  styleUrls: ['./full-item.component.scss'],
})
export class FullItemComponent implements OnInit {
  public item: ItemClass = null;
  public itemEntries: any[] = [];

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    debugger;
    this.route.params.subscribe((params: Params) => {
      debugger;
      let id = params["id"];
      this.item = this.storeService.getItem(id);
      debugger
      this.itemEntries = this.item && Object.entries(this.item);
      debugger;
    });
  }
}
