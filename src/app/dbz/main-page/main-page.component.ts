import { DbzService } from './../services/dbz.services';
import { Component, OnInit, NgModule } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent   {

 
  // get personajes():Personaje []{
  //   return this.DbzService.personajes
  // }
  // constructor(private DbzService: DbzService){}
}
