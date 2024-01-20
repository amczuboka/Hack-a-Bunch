import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageInfoComponent } from './mortgage-info.component';

describe('MortgageInfoComponent', () => {
  let component: MortgageInfoComponent;
  let fixture: ComponentFixture<MortgageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
