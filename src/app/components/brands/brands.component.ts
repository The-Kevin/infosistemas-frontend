import { Component } from '@angular/core';
import { IBrand } from '../../interfaces/brands.interface';
import { IVehicleModel } from '../../interfaces/vehicleModel.interface';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-brands',
  standalone: false,

  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {

  brands: IBrand[] = []
  selectedBrandId: string | null = null;
  vehicleModels: IVehicleModel[] = []
  selectedModel: IVehicleModel | null = null;


  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.requestsService.listBrands().subscribe(({ data }) => {
      this.brands = data;
    });
  }

  onSelectBrand(brandId: string): void {
    this.selectedBrandId = brandId;
    this.loadVehicleModels(brandId);
  }

  loadVehicleModels(brandId: string): void {
    this.requestsService.listVehicleModels(brandId).subscribe(({ data }) => {
      this.vehicleModels = data;
      console.log('Vehicle Models:', this.vehicleModels);
    });
  }

  onSelectModel(model: IVehicleModel): void {
    this.selectedModel = model;
    console.log('Selected Model:', this.selectedModel);
  }

}
