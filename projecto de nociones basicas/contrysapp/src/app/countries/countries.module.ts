import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalPageComponent } from './pages/by-capital-page/capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionComponent } from './pages/by-region-page/by-region.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    CapitalPageComponent,
    ByCountryPageComponent,
    ByRegionComponent,
    ContryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule //  importamos el modulo de rutas de los paises

  ]
})
export class CountriesModule { }
