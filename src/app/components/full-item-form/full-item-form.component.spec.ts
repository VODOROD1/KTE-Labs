import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullItemFormComponent } from './full-item-form.component';

describe('FullItemFormComponent', () => {
  let component: FullItemFormComponent;
  let fixture: ComponentFixture<FullItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
