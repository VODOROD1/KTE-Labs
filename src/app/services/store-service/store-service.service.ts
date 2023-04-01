import { Injectable } from '@angular/core';
import { ItemClass } from '../../model/itemClass';
import { ServerService } from '../server-service/server-service.service';
import { Subject } from 'rxjs';
import { emptySelectedItem } from 'src/app/data/emptySelectedItem';

interface IState {
  items: ItemClass[];
  selectedItem: ItemClass;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public state: IState;

  constructor(private serverService: ServerService) {
    this.state = {
      items: [],
      selectedItem: {...emptySelectedItem},
    };
  }

  // Получить элементы
  getItems(): ItemClass[] {
    this.serverService.getItems().subscribe((res: any) => {
      this.state.items.push(...res);
    });

    return this.state.items;
  }

  // // Получить конкретный элемент
  // getItem(id: string): ItemClass {
  //   this.state.selectedItem = emptySelectedItem
  //   this.serverService.getItem(id)
  //   .subscribe((res: any) => {
  //     debugger;
  //     for (let key of Object.keys(res)) {
  //       // @ts-ignore
  //       this.state.selectedItem[key] = res[key];
  //     }
  //     // GET ITEM
  //     debugger;
  //   });
  //   debugger;
  //   return this.state.selectedItem;

  //   // return this.state.items.filter(item => item.id === id)[0]
  // }

  // Получить конкретный элемент
  getItem(id: string): ItemClass {
    if(this.state.selectedItem.id !== id) {
      debugger;
      let stream: Subject<ItemClass> = new Subject<ItemClass>()
      this.state.selectedItem = emptySelectedItem
      this.serverService.getItem(id)
      .subscribe((res: any) => {
        debugger;
        for (let key of Object.keys(res)) {
          // @ts-ignore
          this.state.selectedItem[key] = res[key];
        }
        // GET ITEM
        debugger;
      });
    }
    return this.state.selectedItem;
  }

  // Добавить элемент
  addItem(newItem: ItemClass): void {
    // this.state.items.unshift(newItem)
    debugger;
    this.serverService.postItem(newItem);
  }

  // Удаление элемента
  removeItem(id: any): void {
    debugger;
    // let index = this.state.items.findIndex((item) => {
    //   return item.id === id
    // })
    // this.state.items.splice(index, 1)
    this.serverService.deleteItem(id).subscribe(
      () => {
        let index = this.state.items.findIndex((item) => {
          return item.id === id;
        });
        this.state.items.splice(index, 1);
      },
      (error) => {}
    );
  }
}
