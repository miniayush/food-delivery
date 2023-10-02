import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLibraryComponent } from './restaurant-library.component';

describe('RestaurantLibraryComponent', () => {
  let component: RestaurantLibraryComponent;
  let fixture: ComponentFixture<RestaurantLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantLibraryComponent]
    });
    fixture = TestBed.createComponent(RestaurantLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
