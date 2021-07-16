import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  //Cosas visibles afuera de este module
  exports: [
    ListadoComponent
  ],
  //Solo van modules dentro
  imports: [
    //
    CommonModule,
  ]
})
export class HeroesModule {

}
