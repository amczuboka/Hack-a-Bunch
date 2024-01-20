import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPaymentsComponent } from './car-payments.component';

describe('CarPaymentsComponent', () => {
  let component: CarPaymentsComponent;
  let fixture: ComponentFixture<CarPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
