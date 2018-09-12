import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';
import { ComprasPage } from '../compras/compras';

import { EventoDetalhePage } from '../evento-detalhe/evento-detalhe';
import { PagarPage } from '../pagar/pagar';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-feed-back',
  templateUrl: 'feed-back.html'
})
export class FeedBackPage {

  constructor(public navCtrl: NavController) {
  }
  goToFeedEnviado(params){
    if (!params) params = {};
    this.navCtrl.push(FeedEnviadoPage);
  }goToCompras(params){
    if (!params) params = {};
    this.navCtrl.push(ComprasPage);
  }goToFeedBack(params){
    if (!params) params = {};
    this.navCtrl.push(FeedBackPage);
  }goToEventoDetalhe(params){
    if (!params) params = {};
    this.navCtrl.push(EventoDetalhePage);
  }goToPagar(params){
    if (!params) params = {};
    this.navCtrl.push(PagarPage);
  }goToCompraEfetuada(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}
