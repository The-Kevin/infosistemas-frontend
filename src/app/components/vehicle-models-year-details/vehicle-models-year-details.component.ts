import { Component } from '@angular/core';
import { IVehicleModelYear } from '../../interfaces/vehicleModelYear.interface';
import { RequestsService } from '../../services/requests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-models-year-details',
  standalone: false,

  templateUrl: './vehicle-models-year-details.component.html',
  styleUrl: './vehicle-models-year-details.component.css'
})
export class VehicleModelsYearDetailsComponent {

  vehicleModelYearId: string | null = null
  vehicleModelYear: IVehicleModelYear | null = null

  constructor(private route: ActivatedRoute, private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.vehicleModelYearId = this.route.snapshot.paramMap.get('id')
    if (this.vehicleModelYearId) {
      this.loadModelYearDetail(this.vehicleModelYearId)
    }
  }

  loadModelYearDetail(id: string): void {
    this.requestsService.getVehicleModelYear(id).subscribe((data) => {
      this.vehicleModelYear = data;
    });
  }

}
