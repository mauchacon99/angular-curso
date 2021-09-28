import { Personaje } from './../interface/dbz.interface';
import { Injectable } from "@angular/core";
 
@Injectable()
export class DbzService {
    // one prop
    private  _personajes : Personaje[] =[
        {
          nombre:'Goku',
          poder:14000
        },
        {
          nombre:'Vegeta',
          poder:12000
        },
      ]
    // two get & set
    get personajes(): Personaje[] {
        return [...this._personajes]
    }
    // three this
    constructor(){
        console.log('servicio Inicializado')
    }

    // four methodo or function
    agregarNuevoPersonaje(personaje: Personaje):void{
        this._personajes.push( personaje )
    }



}