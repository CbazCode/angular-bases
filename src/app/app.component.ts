import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string = 'Contador App';
  number: number = 10;
  base: number = 5
  // sumar(){
  //   this.number += 1
  // }
  // restar(){
  //   this.number -= 1
  // }

  acumular( valor: number) {
    this.number += valor
  }
}
