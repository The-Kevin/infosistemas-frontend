import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { VehicleModelsComponent } from './components/vehicle-models/vehicle-models.component';
import { VehicleModelYearsComponent } from './components/vehicle-model-years/vehicle-model-years.component';
import { VehicleModelsDetailsComponent } from './components/vehicle-models-details/vehicle-models-details.component';
import { VehicleModelsYearDetailsComponent } from './components/vehicle-models-year-details/vehicle-models-year-details.component';
import { BrandsDetailsComponent } from './components/brands-details/brands-details.component';

const routes: Routes = [
  { path: 'brands', component: BrandsComponent },
  { path: 'brands/:id', component: BrandsDetailsComponent },
  { path: 'vehicle-models', component: VehicleModelsComponent },
  { path: 'vehicle-models/:id', component: VehicleModelsDetailsComponent },
  { path: 'vehicle-model-years', component: VehicleModelYearsComponent },
  { path: 'vehicle-model-years/:id', component: VehicleModelsYearDetailsComponent },
  { path: '', redirectTo: '/brands', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
