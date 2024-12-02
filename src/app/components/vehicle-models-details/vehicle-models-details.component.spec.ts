import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleModelsDetailsComponent } from './vehicle-models-details.component';

describe('VehicleModelsDetailsComponent', () => {
  let component: VehicleModelsDetailsComponent;
  let fixture: ComponentFixture<VehicleModelsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleModelsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleModelsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
