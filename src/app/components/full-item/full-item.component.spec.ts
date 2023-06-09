import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullItemComponent } from './full-item.component';

describe('FullItemComponent', () => {
  let component: FullItemComponent;
  let fixture: ComponentFixture<FullItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
