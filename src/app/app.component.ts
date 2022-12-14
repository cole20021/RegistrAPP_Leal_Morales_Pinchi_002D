import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[] = [
    {
      icon:'scan-circle-outline',
      name:'Escanear Codigo QR',
      redirecTo: '/escanear'
    },
    {
      icon:'newspaper-outline',
      name:'Noticias',
      redirecTo: '/noticias'
    },
  ];

  cerrarSesion(navController:NavController){
    localStorage.removeItem('ingresado')
    localStorage.removeItem('nombre')
  }
}
