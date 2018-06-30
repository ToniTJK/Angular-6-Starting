import { Pipe, PipeTranform } from '@angular/core';

@Pipe({ name: 'conversor' })

export class ConversorPipe implements PipeTranform{
  transform(value, por){
    let value_one = parseInt(value);
    let value_two = parseInt(por);

    let result = "La multiplicación: "+value_one+" x "+value_two+" = "+(value_one * value_two);

    return result;
  }
}
