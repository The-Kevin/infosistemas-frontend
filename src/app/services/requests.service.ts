import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IBrand } from '../interfaces/brands.interface';
import { IVehicleModel } from '../interfaces/vehicleModel.interface';
import { IVehicleModelYear } from '../interfaces/vehicleModelYear.interface';
import { IGenericList } from '../interfaces/generic.interface.ts';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getBrand(brandId: string): Observable<IBrand> {
    return this.http.get<IBrand>(this.baseUrl + '/brands/' + brandId)
  }
  listBrands(): Observable<IGenericList<IBrand>> {
    return this.http.get<IGenericList<IBrand>>(this.baseUrl + '/brands')
  }

  getVehicleModel(vehicleModel: string): Observable<IVehicleModel> {
    return this.http.get<IVehicleModel>(this.baseUrl + '/vehicle-model/' + vehicleModel)
  }
  listVehicleModels(brandId?: string): Observable<IGenericList<IVehicleModel>> {
    const handleQuery = {
      params: {}
    }
    if (brandId) {
      handleQuery.params = Object.assign(handleQuery.params, {
        brandId
      })
    }
    return this.http.get<IGenericList<IVehicleModel>>(this.baseUrl + '/vehicle-model', handleQuery)
  }
  getVehicleModelYear(vehicleModelYear: string): Observable<IVehicleModelYear> {
    return this.http.get<IVehicleModelYear>(this.baseUrl + '/vehicle-model-year/' + vehicleModelYear)
  }
  listVehicleModelYears(): Observable<IVehicleModelYear[]> {
    return this.http.get<IVehicleModelYear[]>(this.baseUrl + '/vehicle-model-year')
  }
}
