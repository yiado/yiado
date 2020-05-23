import { Component, OnInit } from '@angular/core';
declare var Parallax;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  //---------------------------------------------------------------------
  title = 'Yiado';
  quien = '   ¿?';
  donde = '   ¿?';
  que = '   ¿?';
  //---------------------------------------------------------------------
  aboutTitle = 'Cómo lo hacemos?';
  aboutText1 = 'En #Yiado pensamos que el desarrollo de software no solo debe ser escritura de codigo';
  aboutText2 = ' <!-- HOLA MUNDO --> nuestro cultura es el desarrollo de ideas.';  
  aboutIdea = 'Idea';
  aboutConcept = 'Concepto';
  aboutDesing = 'Diseño';
  aboutDevelop = 'Desarrollo';
  

  ngOnInit(){
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  }
}
