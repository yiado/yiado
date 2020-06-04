import { Component, OnInit } from '@angular/core';
declare var Parallax;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  //---------------------------------------------------------------------
  headerYia = "Yia";
  headerDo = "Do";
  headerMenuMovil = "Toggle navigation";
  headerAbout = " Nosotros";
  headerFeatures = "Servicios";
  headerPricing = "Cloud";
  headerTeam = "Equipo";
  headerSendEmail = "Detalles";
  headerContact = "Contacto";
  //---------------------------------------------------------------------
  title = 'Yiado';
  quien = '   ¿?';
  donde = '   ¿?';
  que = '   ¿?';
  //---------------------------------------------------------------------
  aboutTitle = '¿Qué Hacemos?';
  aboutText1 = 'En #Yiado pensamos que el desarrollo de software no solo debe ser escritura de codigo';
  aboutText2 = ' <!-- HOLA MUNDO --> nuestro cultura es el desarrollo de ideas.';  
  aboutIdea = 'Idea';
  aboutIdeaDescrip = 'Experimentar, hacer cosas nuevas, ser curiosos, no tener miedo, básicamente volver a ser niños y dejar volar nuestra imaginación es nuestra cultura.';
  aboutConcept = 'Concepto';
  aboutConceptDescrip = 'Transmitimos la esencia de una idea, fijamos objetivos, para que o por qué genera valor a la sociedad.';
  aboutDesing = 'Diseño';
  aboutDesingDescrip = 'Más que bocetos o dibujos, creamos comunicación visual, trazamos ideas en colores, procesos, identificamos como impactar con creatividad.';
  aboutDevelop = 'Desarrollo';
  aboutDevelopDescrip = "Materializamos la creatividad y abstracción de un producto o proceso, llevamos a operacion ideas convertidas en oportunidades.";
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
  cloudTitle = '¿En la Nube?';
  cloudDescrip = 'Somos tu apoyo para tomar la mejor decision al integrar servicios en la nube en el desarrollo de tus ideas, desde tu pagina web, E-Commerce o App, contamos con experiencia en Amazon Web Services, Google Cloud que te permitiran escalar tu desarrollo con un excelente costo.';
  cloudSeg = "Proporciona un control completo sobre los recursos informáticos y le permite ejecutarse en el entorno informático";
  cloudSto = "Almacenamiento y procesamiento de recursos informaticos ofreciendo escalabilidad, disponibilidad de datos, seguridad y rendimiento";
  cloudZone = 'Asesoramiento al implementar tu estrategia para ejecutar tus aplicaciones empresariales, en regiones y zonas de disponibilidad que se ajusten a tu prioridad.';
  cloudpricing = 'Paga por los servicios individuales que necesite durante el tiempo que los use, sin contratos a largo plazo ni licencias complejas.';
  //----------------------------------------------------------------------
  team = "Nuestro Equipo"; 
  teamDescrip = "Somos un equipo multidisciplinario emprendedor, amante de la tecnología, que esta preparado para asumir nuevos desafios."
  devLram = "Liliana Suárez";
  devDensing = "Designer - Community Manager";
  devDorz = "Douglas Ramírez";
  devFront = "Front-end Developer   ";
  devYsmm = "Ysrael Méndez";
  devBack = "Back-end Developer     ";
//-------------------------------------------------------------------------
  sendtoken = "ddixhpr59yqlaqht1qigmi76"
  sendTitle = "¿Quieres más información?"
  sendTitle2 = "Déjanos tu correo y pronto nos pondremos en contacto contigo."
  addEmail = "Introduce tu email .."
//-------------------------------------------------------------------------
  footerTitle = "#YiaDo";
  footerDescrip = "Si lo puedes #Imaginar, lo puedes #Programar."; 
  footerDirec = "Dirección";
  footerDirecDescrip = "Hugo Silva Endeiza 840, Antofagasta, Chile.";
  footerTelef = "Teléfono";
  footerTelefDescrip1 = "(+56) 9 55174678";
  footerTelefDescrip2 = "(+56) 9 97625414";
  footerNetwork = "Contacto";
  footerNetworkDecrip1 = "contacto@yiado.cl";
  footerNetworkDecrip2 = "github.com/yiado";


  ngOnInit(){ 
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  }
  
}
