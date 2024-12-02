import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { VehicleModelsComponent } from './components/vehicle-models/vehicle-models.component';
import { VehicleModelYearsComponent } from './components/vehicle-model-years/vehicle-model-years.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    VehicleModelsComponent,
    VehicleModelYearsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
