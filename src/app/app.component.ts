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
  aboutIdeaDescrip = 'Experimentar, hacer cosas nuevas, ser curiosos, no tener miedo, básicamente volver a ser niños y dejar volar nuestra imaginación es nuestra cultura.';
  aboutConcept = 'Concepto';
  aboutConceptDescrip = 'Transmitimos la esencia de una idea, fijamos objetivos, para que y/o por que genera valor a la sociedad.';
  aboutDesing = 'Diseño';
  aboutDesingDescrip = 'Más que bocetos o dibujos, creamos comunicación visual, trazamos ideas en colores, procesos, indentificamos como impactar con creatividad.';
  aboutDevelop = 'Desarrollo';
  aboutDevelopDescrip = "Materializamos la creatividad y abstracción un producto o proceso, llevamos a operacion ideas convertidas en oportunidades.";
  //----------------------------------------------------------------------
  featuresTitle = 'Nuestros Servicios';
  featuresDescrip = 'Ofrecemos un completo espectro de servicios para ayudar a que las organizaciones funcionen mejor. Podemos combinar cualquiera de nuestros productos y servicios para crear un paquete que esté hecho justo a la medida para su negocio. Esto elimina la complejidad y el costo innecesario de llevarlo a donde quiere llegar, cualquiera que sea su punto de partida. ';
  featuresDensing = 'Diseño de productos y Servicios';
  featuresDescripDescrip = 'Soluciones orientadas a mejorar la experiencia de tus clientes en  canales digitales y presenciales.';
  featuresDevelop = 'Desarrollo de software DevOps';
  featuresDevelopDescrip = 'Implementamos tecnologías emergentes desde la agilidad para generar resultados reales.';
  featuresDigital = 'Transformación digital Community Manager';
  featuresDigitalDescrip = 'Ayudamos a definir la estrategia para transformar tu negocio y alcanzar la madurez digital.';


  //---------------------------------------------------------------------- 
  ngOnInit(){ 
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  }
}
