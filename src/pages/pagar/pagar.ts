import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { ComprasPage } from '../compras/compras';
import { FeedBackPage } from '../feed-back/feed-back';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';
import { EventoDetalhePage } from '../evento-detalhe/evento-detalhe';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-pagar',
  templateUrl: 'pagar.html'
})
export class PagarPage {

  constructor(public navCtrl: NavController) {
  }
  goToCompraEfetuada(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }goToCompras(params){
    if (!params) params = {};
    this.navCtrl.push(ComprasPage);
  }goToFeedBack(params){
    if (!params) params = {};
    this.navCtrl.push(FeedBackPage);
  }goToFeedEnviado(params){
    if (!params) params = {};
    this.navCtrl.push(FeedEnviadoPage);
  }goToEventoDetalhe(params){
    if (!params) params = {};
    this.navCtrl.push(EventoDetalhePage);
  }goToPagar(params){
    if (!params) params = {};
    this.navCtrl.push(PagarPage);
  }
}
