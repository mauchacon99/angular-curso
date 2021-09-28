import { DbzService } from './../services/dbz.services';
import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {

  // @Input() personajes : Personaje [] = []

  get personajes(): Personaje [] {
    return this.DbzService.personajes
  }

  constructor(public DbzService:DbzService ){}

  
}
