import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listados de las Personas';
  personas: Persona[] = [new Persona("Edson","Càrdenas"), new Persona("Julia","Soledad"), new Persona("Alejandra","Chumpitaz"), new Persona("Alessandro","Arias")];
  nombreInput:string;
  apellidoInput:string;

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
