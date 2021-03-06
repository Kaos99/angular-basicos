import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  get personajes() {
    return this.DbzService.personajes;
  }
  
  //@Input() personajes: Personaje[] = []
  constructor(private DbzService: DbzService) {

  }



}
