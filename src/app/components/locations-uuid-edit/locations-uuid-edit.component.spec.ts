import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsUuidEditComponent } from './locations-uuid-edit.component';

describe('LocationsUuidEditComponent', () => {
  let component: LocationsUuidEditComponent;
  let fixture: ComponentFixture<LocationsUuidEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsUuidEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsUuidEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
