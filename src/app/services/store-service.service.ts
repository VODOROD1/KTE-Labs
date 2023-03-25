import { Injectable } from '@angular/core';
import { ItemClass } from '../model/itemClass';

const initialData: ItemClass[] = [
  {
    id: 1,
    title: 'Item 1'
  },
  {
    id: 2,
    title: 'Item 2'
  },
  {
    id: 3,
    title: 'Item 3'
  },
  {
    id: 4,
    title: 'Item 4'
  },
  {
    id: 5,
    title: 'Item 5'
  }
]

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  public state: ItemClass[];

  constructor() {
    this.state = initialData
  }

  addItem(newItem: ItemClass) {
    this.state.unshift(newItem)
  }

  removeItem(id: number) {
    this.state.
  }
}
