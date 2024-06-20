import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListHeroComponent { 
  @Input() 
  public  Personajes: Personaje[] = [
    {
      
      nombre: 'Gogeta',
      poder: 125000
    },
   
  ];

  @Output()
  public onDelete:  EventEmitter<string> = new EventEmitter();

  onDeletePersonaje(id?:string): void {
    if (!id) {
      return;
    }
    this.onDelete.emit(id);
  }





}
