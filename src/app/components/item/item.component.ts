import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ItemType } from '../items/items.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent {
  
  @Input() data: ItemType;
  
}
