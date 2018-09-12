import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedBackPage } from '../feed-back/feed-back';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';

import { EventoDetalhePage } from '../evento-detalhe/evento-detalhe';
import { PagarPage } from '../pagar/pagar';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html'
})
export class ComprasPage {

  constructor(public navCtrl: NavController) {
  }
  goToFeedBack(params){
    if (!params) params = {};
    this.navCtrl.push(FeedBackPage);
  }goToFeedEnviado(params){
    if (!params) params = {};
    this.navCtrl.push(FeedEnviadoPage);
  }goToCompras(params){
    if (!params) params = {};
    this.navCtrl.push(ComprasPage);
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
