import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { concatMap, switchMap } from 'rxjs';
import { emptySelectedItem } from 'src/app/data/emptySelectedItem';
import { ItemClass } from 'src/app/model/itemClass';
import { StoreService } from 'src/app/services/store-service/store-service.service';

@Component({
  selector: 'app-full-item',
  templateUrl: './full-item.component.html',
  styleUrls: ['./full-item.component.scss'],
})
export class FullItemComponent implements OnInit, OnChanges {
  public item: ItemClass;
  public itemEntries: any[];

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.item = this.storeService.getItem("empty");
    debugger;
    this.itemEntries = Object.entries(this.item);
    this.route.params
    .subscribe(
      (value: Params) => {
        // Some asynchronous task running 1 second
        debugger
        let id = value["id"]
        debugger
        let itemFromServer = this.storeService.getItem(id)
        let flag = this.item === itemFromServer
        console.log(flag)
        debugger;
      }
    )
    // .subscribe(
    //   (item: any) => {
    //     debugger
    //     if(this.item.id !== 'empty') {
    //       this.item = item
    //       this.itemEntries = Object.entries(this.item);
    //       debugger
    //     }
    //     debugger
    //   }
    // )

    // this.route.params
    // .pipe(
    //   switchMap((value: Params) => {
    //     // Some asynchronous task running 1 second
    //     debugger;
    //     let id = value["id"];
    //     debugger;
    //     return this.storeService.getItem(id);
    //   })
    // ).subscribe(
    //   (item: any) => {
    //     debugger
    //     if(this.item.id !== 'empty') {
    //       this.item = item
    //       this.itemEntries = Object.entries(this.item);
    //       debugger
    //     }
    //     debugger
    //   }
    // )
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger
    if(this.item.id !== 'empty') {
      debugger
      this.itemEntries = Object.entries(this.item);
    }
    debugger
  }
}
