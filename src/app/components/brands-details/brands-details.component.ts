import { Component } from '@angular/core';
import { IBrand } from '../../interfaces/brands.interface';
import { RequestsService } from '../../services/requests.service';
import { IVehicleModel } from '../../interfaces/vehicleModel.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brands-details',
  standalone: false,

  templateUrl: './brands-details.component.html',
  styleUrl: './brands-details.component.css'
})
export class BrandsDetailsComponent {
  brand: IBrand | null = null
  brandId: string | null = null;


  constructor(private route: ActivatedRoute, private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.brandId = this.route.snapshot.paramMap.get('id')
    if (this.brandId) {
      this.loadVehicleModels(this.brandId)
    }
  }

  loadVehicleModels(brandId: string): void {
    this.requestsService.getBrand(brandId).subscribe((data) => {
      this.brand = data;
    });
  }
}
