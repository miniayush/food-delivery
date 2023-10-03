import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLibraryComponent } from './food-library.component';

describe('FoodLibraryComponent', () => {
  let component: FoodLibraryComponent;
  let fixture: ComponentFixture<FoodLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodLibraryComponent]
    });
    fixture = TestBed.createComponent(FoodLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
