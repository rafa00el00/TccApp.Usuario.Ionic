import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComprasPage } from '../compras/compras';
import { FeedBackPage } from '../feed-back/feed-back';
import { EventoDetalhePage } from '../evento-detalhe/evento-detalhe';
import { PagarPage } from '../pagar/pagar';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-feed-enviado',
  templateUrl: 'feed-enviado.html'
})
export class FeedEnviadoPage {

  constructor(public navCtrl: NavController) {
  }
  goToCompras(params){
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
  }goToCompraEfetuada(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}
