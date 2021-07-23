import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre:'',
    poder:0
  }
  // emite eventos
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService: DbzService){}
  agregar(){
    if( this.nuevo.nombre.trim().length === 0){
      alert('Nombre vacio')
      return;
    }
    if(this.nuevo.poder <= 0) {
      alert('Poder invalido')
      return
    }
    console.log(this.nuevo)
    // this.onNuevoPersonaje.emit(this.nuevo)
    this.dbzService.agregarNuevoPersonaje(this.nuevo)

    this.nuevo = {
      nombre:'',
      poder:0
    }
    alert('Personaje agregado con exito')
  }
}
