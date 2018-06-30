import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector:'empleado',
  templateUrl:'empleado.component.html'
})

export class EmpleadoComponent {
  public nombre = 'Toni';
  public sueldo = '1200';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajadorExterno:boolean;
  public color:string;
  public colorSeleccionado:string;

  constructor(){
    this.empleado = new Empleado("David Lopez", 21, 'Camarero', true);
    this.trabajadores = [
      new Empleado("David Lopez", 21, 'Camarero', true),
      new Empleado("Toni Torres", 25, 'Camarero', false),
      new Empleado("Pepe Robles", 23, 'Cocinero', true)
    ];

    this.trabajadorExterno = true;
    this.color = 'blue';
    this.colorSeleccionado = '#ccc';
  }

  ngOnInit(){

    console.log(this.empleado);
    console.log(this.trabajadores);


  }

  cambiarExterno(value){
    this.trabajadorExterno = value;
  }

  logColorSeleccionado(){
    console.log(this.colorSeleccionado);
  }

}
