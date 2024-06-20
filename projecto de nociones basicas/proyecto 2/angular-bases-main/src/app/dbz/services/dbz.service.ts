import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import  {v4 as id} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

    public personajes: Personaje[] = [
        {
            id: id(),
            nombre: 'Goku',
            poder: 15000
        },
        {
            id: id(),
            nombre: 'Vegeta',
            poder: 7500
        }
        
    ]
    

    onNewPersonaje(personaje: Personaje) : void {
      console.log( personaje);
      const newPersonaje = {
            id: id(),
            ...personaje
        }
      this.personajes.push(newPersonaje);
     
    
    }

    onDeletePersonaje(id: string) {
        this.personajes = this.personajes.filter(personaje => personaje.id !== id);
    }
    



    
}