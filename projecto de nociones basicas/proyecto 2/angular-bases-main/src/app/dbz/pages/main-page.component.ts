import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPage {
   
    constructor (private dbzService: DbzService) {}

    get personajes(): Personaje[] {
        return [...this.dbzService.personajes]
    }
    
    onDeletePersonaje(id: string): void {
        this.dbzService.onDeletePersonaje(id);
    } 

    onAddPersonaje(personaje: Personaje): void {
        this.dbzService.onNewPersonaje(personaje);
    }

   

}
    


