import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalPageComponent } from './pages/by-capital-page/capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionComponent } from './pages/by-region-page/by-region.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';

//  modelo de rutas de la aplicacion  internas de un modulo de la aplicacion  countries

const  routes: Routes = [
  {
     path: 'by-capture',
      component: CapitalPageComponent

  },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionComponent
  },
  {
    path: 'by/:id',
    component: ContryPageComponent
  }
]

@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})


export class CountriesRoutingModule { }
