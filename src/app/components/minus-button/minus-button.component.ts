import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-minus-button',
  templateUrl: './minus-button.component.html',
  styleUrls: ['./minus-button.component.scss']
})

export class MinusButtonComponent {
  @Output() onMinusItem: EventEmitter<any> = new EventEmitter()

  public minusItemHandler(event: any): void {
    this.onMinusItem.emit("MINUS_EVENT")
  }
}
