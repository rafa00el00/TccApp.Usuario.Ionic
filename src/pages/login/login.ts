import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { EventoDetalhePage } from '../evento-detalhe/evento-detalhe';
import { PagarPage } from '../pagar/pagar';
import { ComprasPage } from '../compras/compras';
import { FeedBackPage } from '../feed-back/feed-back';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';
import { SignupPage } from '../signup/signup';
import { TagsRegistroPage } from '../tags-registro/tags-registro';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { AuthNegocio } from '../../Negocio/BO/auth.negocio';
import { LoginTo } from '../../Negocio/Models/login.to';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public login:LoginTo;
  constructor(
    public navCtrl: NavController,
    private _negocio: AuthNegocio,
    private loagindCtrl: LoadingController,
    private dialog: AlertController,
  ) {
    this.login = new LoginTo();
    this.login.email = "whitestrapes@gmail.com";
    this.login.password = "Paicon@123"
  }
  goToTodosOsEventos(params) {
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  } goToEventoDetalhe(params) {
    if (!params) params = {};
    this.navCtrl.push(EventoDetalhePage);
  } goToPagar(params) {
    if (!params) params = {};
    this.navCtrl.push(PagarPage);
  } goToCompraEfetuada(params) {
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  } goToCompras(params) {
    if (!params) params = {};
    this.navCtrl.push(ComprasPage);
  } goToFeedBack(params) {
    if (!params) params = {};
    this.navCtrl.push(FeedBackPage);
  } goToFeedEnviado(params) {
    if (!params) params = {};
    this.navCtrl.push(FeedEnviadoPage);
  } goToSignup(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  } goToTagsRegistro(params) {
    if (!params) params = {};
    this.navCtrl.push(TagsRegistroPage);
  }

  async DoLogin() {
    let load = this.loagindCtrl.create();
    load.present()
    let resp = (await this._negocio.DoLogin(this.login.email, this.login.password));
    load.dismiss();
    if (resp.status) {
      this.goToTodosOsEventos(null);
    }else{
      this.dialog.create({
        message:resp.message
      }).present()
    }

  }

}
