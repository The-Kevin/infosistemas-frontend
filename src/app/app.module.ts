import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { VehicleModelsComponent } from './components/vehicle-models/vehicle-models.component';
import { VehicleModelYearsComponent } from './components/vehicle-model-years/vehicle-model-years.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleModelsDetailsComponent } from './components/vehicle-models-details/vehicle-models-details.component';
import { VehicleModelsYearDetailsComponent } from './components/vehicle-models-year-details/vehicle-models-year-details.component';
import { BrandsDetailsComponent } from './components/brands-details/brands-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    VehicleModelsComponent,
    VehicleModelYearsComponent,
    VehicleModelsDetailsComponent,
    VehicleModelsYearDetailsComponent,
    BrandsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
