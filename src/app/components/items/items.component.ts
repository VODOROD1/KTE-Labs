import { Component } from '@angular/core';

export interface ItemType {
  label: string
}

const initialData: ItemType[] = [
  {
    label: 'Item 1'
  },
  {
    label: 'Item 2'
  },
  {
    label: 'Item 3'
  },
  {
    label: 'Item 4'
  },
  {
    label: 'Item 5'
  }
]

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent {
  public items: ItemType[] = initialData;

  public addItemHandler() {
    debugger;
    let newObj = {
      label: 'Item 6'
    }

    initialData.unshift(newObj);
  }
}
