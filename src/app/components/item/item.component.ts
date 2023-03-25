import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ItemClass } from 'src/app/model/itemClass';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemComponent {
  @Input() data: ItemClass;
}
