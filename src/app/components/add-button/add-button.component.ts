import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})

export class AddButtonComponent {
  @Output() onAddItem: EventEmitter<any> = new EventEmitter()

  public addItemHandler(event: any): void {
    debugger;
    this.onAddItem.emit("ADD_EVENT")
  }
}
