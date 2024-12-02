import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleModelYearsComponent } from './vehicle-model-years.component';

describe('VehicleModelYearsComponent', () => {
  let component: VehicleModelYearsComponent;
  let fixture: ComponentFixture<VehicleModelYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleModelYearsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleModelYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
