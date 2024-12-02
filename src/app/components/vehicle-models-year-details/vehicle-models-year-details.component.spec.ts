import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleModelsYearDetailsComponent } from './vehicle-models-year-details.component';

describe('VehicleModelsYearDetailsComponent', () => {
  let component: VehicleModelsYearDetailsComponent;
  let fixture: ComponentFixture<VehicleModelsYearDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleModelsYearDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleModelsYearDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
