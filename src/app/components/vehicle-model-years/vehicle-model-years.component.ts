import { Component } from '@angular/core';
import { IVehicleModel } from '../../interfaces/vehicleModel.interface';
import { RequestsService } from '../../services/requests.service';
import { IVehicleModelYear } from '../../interfaces/vehicleModelYear.interface';

@Component({
  selector: 'app-vehicle-model-years',
  standalone: false,

  templateUrl: './vehicle-model-years.component.html',
  styleUrl: './vehicle-model-years.component.css'
})
export class VehicleModelYearsComponent {
  vehicleModelsYears: IVehicleModelYear[] = []

  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.loadVehicleModelsYears();
  }

  loadVehicleModelsYears(): void {
    this.requestsService.listVehicleModelYears().subscribe(({ data }) => {
      this.vehicleModelsYears = data;
    });
  }
}
