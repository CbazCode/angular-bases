import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder: 7500
    }
  ]
  nuevo: Personaje = {
    nombre:'',
    poder: 0
  }

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
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre:'',
      poder:0
    }
    alert('Personaje agregado con exito')
  }

  // cambiarNombre(e:any){
  //   this.nuevo.nombre = e.target.value || ''
  // }

}
