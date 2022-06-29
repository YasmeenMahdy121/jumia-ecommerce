import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSalesCategoriesComponent } from './flash-sales-categories.component';

describe('FlashSalesCategoriesComponent', () => {
  let component: FlashSalesCategoriesComponent;
  let fixture: ComponentFixture<FlashSalesCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashSalesCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashSalesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
