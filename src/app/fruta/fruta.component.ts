import { Component } from '@angular/core'

@Component ({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class  FrutaComponent{
    public nombre_componente = 'Componente de Fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Snagria';
    //private hola = 'Soy privada';

    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<any> = ['Carpintero', 55, 'Fontanero'];
    public comodin:any;

    // CONTRUCTOR DE METODOS
    constructor () {
      this.nombre = 'Toni';
      this.edad = 12;
      this.mayorDeEdad = false;
      this.comodin = 'Comodin';
      //console.log(this.trabajos):

    }

    //  CONTRUCTOR DE METODOS / FUNCIONES
    ngOnInit () {
    this.cambiarNombre();
    this.cambiarEdad(21);
    console.log("Hello Wolrd " + this.nombre + "," + this.edad + "años.");

    // Variables y alcance
    var uno = 8;
    var dos = 15;

    if(uno === 8){
      let uno = 3;
      var dos = 88;

      console.log("uno es igual a 8 -> " + uno);
    }
    console.log("uno es igual a 8 -> " + uno);

    }

    cambiarNombre(){
      this.nombre = "Marc";
    }

    cambiarEdad(edad){
      this.edad = edad;
    }

}
