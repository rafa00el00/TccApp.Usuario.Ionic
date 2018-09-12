import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Usuario } from '../../Negocio/Models/Usuario';
import { AuthNegocio } from '../../Negocio/BO/auth.negocio';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';

@Component({
  selector: 'page-tags-registro',
  templateUrl: 'tags-registro.html'
})
export class TagsRegistroPage implements OnInit {



  usuario: Usuario
  tags: string[];
  constructor(
    public navCtrl: NavController,
    private _navParams: NavParams,
    private _authNegocio: AuthNegocio,
    private _eventoNegocio: EventoNegocio,
    private dialog: AlertController,
    private loadingCtrl: LoadingController
  ) {
    this.usuario = _navParams.get("usuario");
  }

  async ngOnInit() {
    let load = this.loadingCtrl.create();
    load.present();
    let resp = (await this._eventoNegocio.GetTags());

    this.tags = resp;
    load.dismiss();
  }


  async Cadastrar() {
    let load = this.loadingCtrl.create();
    load.present()
    var resp = (await this._authNegocio.Registrar(this.usuario))
    load.dismiss();
    if (resp.ok) {
      this.dialog.create({
        message: "Cadastro Concluido faça login!!!",
        buttons: ["OK"]
      }).present();
      this.navCtrl.goToRoot(null);
    } else {
      console.error(resp);
      this.dialog.create({
        message: "Erro ao efetuar o cadastro [" + resp.error + "]"
      }).present();
    }
  }

}
