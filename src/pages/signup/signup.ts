import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TagsRegistroPage } from '../tags-registro/tags-registro';
import { Usuario } from '../../Negocio/Models/Usuario';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {


  usuario:Usuario;

  constructor(public navCtrl: NavController) {
    this.usuario = new Usuario();
  }
  goToTagsRegistro(params){
    if (!params) params = {usuario:this.usuario};
    this.navCtrl.push(TagsRegistroPage,params);
  }
}
