import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-full-item-form',
  templateUrl: './full-item-form.component.html',
  styleUrls: ['./full-item-form.component.scss']
})

export class FullItemFormComponent implements OnInit {

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
    // this.form = new FormGroup({})
  }

  submitHandler() {
    console.log(this.form)
    debugger
    this.formSubmit.emit(this.form.value)
  }
}
