import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualOffersComponent } from './annual-offers.component';

describe('AnnualOffersComponent', () => {
  let component: AnnualOffersComponent;
  let fixture: ComponentFixture<AnnualOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
