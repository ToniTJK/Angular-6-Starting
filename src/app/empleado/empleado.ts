export class Empleado{
/*
  public nombre:string;
  public edad:number;
  public email:string;

  constructor(nombre, edad, email){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email
  }
  */

  constructor(
    public nombre:string,
    public edad:number,
    public cargo:string,
    public contratado:boolean
  ){}
}
