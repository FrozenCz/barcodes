import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeDashboardComponent } from './barcode-dashboard.component';

describe('BarcodeDashboardComponent', () => {
  let component: BarcodeDashboardComponent;
  let fixture: ComponentFixture<BarcodeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
