import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialAppComponent } from './initial-app.component';

describe('InitialAppComponent', () => {
  let component: InitialAppComponent;
  let fixture: ComponentFixture<InitialAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
