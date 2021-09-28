import { DbzService } from './../services/dbz.services';
import { Personaje } from './../interface/dbz.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
   
})
export class CrearComponent  {

  // @Output() AddPersonaje : EventEmitter<Personaje> = new EventEmitter()
 
  nuevo :Personaje  = {
    nombre: '',
    poder:0
  } 

  constructor(private DbzService:DbzService){ }

  agregar():void{
    if(this.nuevo.nombre.trim().length == 0 ) { return }
    
    this.DbzService.agregarNuevoPersonaje( this.nuevo )
    // this.AddPersonaje.emit( this.nuevo )
     
    this.nuevo = {
      nombre:'',
      poder:0
    }
 }
 
}
