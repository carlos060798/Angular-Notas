import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
// este componente es el que se encarga de manejar las rutas de la aplicacion  del lado del cliente
const routes: Routes = [  // se crea un arreglo de rutas con la propiedad path y component
  {
  path: 'home',
  component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent


  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'contries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
  },
  {
    path: '**',
    redirectTo: 'home',

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)  //  se importa el modulo de rutas y se le pasa el arreglo de rutas
  ],
  exports: [RouterModule]  //  se exporta para que pueda ser utilizado en otros modulos
})
export class AppRoutingModule { }
