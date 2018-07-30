import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})

export class CochesComponent {
public coche:Coche;
public coches:Array<Coche>;
public articulos;

constructor(
  private _peticionesServices: PeticionesService
){
  this.coche = new Coche("","","");
  this.coches = [
    new Coche("Seat Panda","12","Blanco"),
    new Coche("Renault","20","Negro")
  ]
}

ngOnInit(){
  this._peticionesServices.getArticulos().subscribe(
      result => {
        console.log(result);
        this.articulos = result;

        if(!this.articulos){
          console.log("Error en el Servidor.");
        }

      },
      error =>{
        var err = <any>error;
        console.log(err);
      }
  );

}

onSubmit(){
  console.log(this.coches.push(this.coche));
  this.coche = new Coche("","","");
}

}
