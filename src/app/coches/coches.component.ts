import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html'
})

export class CochesComponent {
public coche:Coche;
public coches:Array<Coche>;

constructor(){
  this.coche = new Coche("","","");
  this.coches = [
    new Coche("Seat Panda","12","Blanco"),
    new Coche("Renault","20","Negro")
  ]
}

onSubmit(){
  console.log(this.coches.push(this.coche));
  this.coche = new Coche("","","");
}

}