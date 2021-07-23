import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  nuevo: Personaje = {
    nombre:'',
    poder: 0
  }
  //inyeccion de servicio e inicializacion
  constructor( private dbzService: DbzService){}

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes
  // }

  // agregarNuevoPersonaje( personaje:Personaje ){
  //   this.personajes.push(personaje)
  // }

  // cambiarNombre(e:any){
  //   this.nuevo.nombre = e.target.value || ''
  // }

}
