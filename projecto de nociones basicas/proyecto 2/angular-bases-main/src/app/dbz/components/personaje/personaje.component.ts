import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeDbzComponent {

  @Output()

  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();  // Evento que se va a emitir
  public personaje: Personaje = {
    nombre:'',
    poder: 0
  }

  onSubmitdata () {
    if (this.personaje.nombre.length === 0) return;
    this.onNewPersonaje.emit(this.personaje);
    this.personaje = {
      nombre: '',
      poder: 0
    }

    
    
  }

}
