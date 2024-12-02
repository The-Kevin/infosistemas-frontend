import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { IVehicleModel } from '../../interfaces/vehicleModel.interface';

@Component({
  selector: 'app-vehicle-models',
  standalone: false,

  templateUrl: './vehicle-models.component.html',
  styleUrl: './vehicle-models.component.css'
})
export class VehicleModelsComponent {

  vehicleModels: IVehicleModel[] | null = null
  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.loadVehicleModels()

  }

  loadVehicleModels(): void {
    this.requestsService.listVehicleModels().subscribe(({ data }) => {
      this.vehicleModels = data
    })

  }
}
