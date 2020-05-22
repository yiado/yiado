import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //---------------------------------------------------------------------
  title = 'Yiado';
  quien = 'NO SABEMOS QUIENES SOMOS';
  donde = 'NO SABEMOS QUE QUEREMOS';
  que = 'NO SABEMOS A DONDE VAMOS';
  //---------------------------------------------------------------------
  aboutTitle = 'Como lo hacemos?';
  aboutText1 = 'En #Yiado pensamos que el desarrollo de software no solo debe ser escritura de codigo';
  aboutText2 = ' <!-- HOLA MUNDO --> nuestro cultura es el desarrollo de ideas.';  
  aboutIdea = 'Idea';
  aboutConcept = 'Concepto';
  aboutDesing = 'Desiño';
  aboutDevelop = 'Desarrollo';



}
