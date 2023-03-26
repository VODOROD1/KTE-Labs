import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-full-item-form',
  templateUrl: './full-item-form.component.html',
  styleUrls: ['./full-item-form.component.scss']
})
export class FullItemFormComponent implements OnInit {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      dob: [''],
      gender: ['']
    });
  }

  ngOnInit() {
    this.form = new FormGroup({})
  }

  submitHandler() {

  }
}
