import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from '../pages/main-page.component';
import { ListHeroComponent } from '../components/list/list.component';
import {  PersonajeDbzComponent } from '../components/personaje/personaje.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [MainPage ,
    ListHeroComponent,
    PersonajeDbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    

  ],
  exports: [MainPage]
})
export class DbzModule { }
