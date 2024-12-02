import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { IVehicleModel } from '../../interfaces/vehicleModel.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-models-details',
  standalone: false,

  templateUrl: './vehicle-models-details.component.html',
  styleUrl: './vehicle-models-details.component.css'
})
export class VehicleModelsDetailsComponent {

  vehicleModelId: string | null = null
  vehicleModel: IVehicleModel | null = null
  constructor(private route: ActivatedRoute, private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.vehicleModelId = this.route.snapshot.paramMap.get('id')
    console.log("o id aqui: ", this.route.snapshot.paramMap.get('id'))
    if (this.vehicleModelId) {
      this.loadModelDetail(this.vehicleModelId)
    }
  }

  loadModelDetail(id: string): void {
    this.requestsService.getVehicleModel(id).subscribe((data) => {
      this.vehicleModel = data;
    });
  }
}
