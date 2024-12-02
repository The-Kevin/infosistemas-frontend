import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { VehicleModelsComponent } from './components/vehicle-models/vehicle-models.component';
import { VehicleModelYearsComponent } from './components/vehicle-model-years/vehicle-model-years.component';
import { VehicleModelsDetailsComponent } from './components/vehicle-models-details/vehicle-models-details.component';

const routes: Routes = [
  { path: 'brands', component: BrandsComponent },
  { path: 'vehicle-models', component: VehicleModelsComponent },
  { path: 'vehicle-models/:id', component: VehicleModelsDetailsComponent },
  { path: 'vehicle-model-years', component: VehicleModelYearsComponent },
  { path: '', redirectTo: '/brands', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
