import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.page.html',
  styleUrls: ['./quienes.page.scss'],
})
export class QuienesPage implements OnInit {

  nombre= localStorage.getItem("nombre")

  usuario = {
    email:'',
    password:''
  }

  usuario2 = {
    email2:'',
    password2:''
  }

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

  onSubmit2(){
    console.log('submit');
    console.log(this.usuario2);
  }
}
