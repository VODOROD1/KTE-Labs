import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})

export class ItemFormComponent implements OnInit {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter()

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: [''],
      amount: [''],
      description: [''],
      shortDescription: [''],
      price: [''],
      date: [''],
      image: ['']
    });
  }

  ngOnInit() {
    
  }

  submitHandler() {
    console.log(this.form)
    debugger
    this.formSubmit.emit(this.form.value)
  }
}
