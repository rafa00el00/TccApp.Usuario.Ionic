import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoDetalhePage } from '../evento-detalhe/evento-detalhe';
import { PagarPage } from '../pagar/pagar';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { ComprasPage } from '../compras/compras';
import { FeedBackPage } from '../feed-back/feed-back';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { EventoTo } from '../../Negocio/Models/evento.to';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';

@Component({
  selector: 'page-em-alta',
  templateUrl: 'em-alta.html'
})
export class EmAltaPage {
  eventos: EventoTo[];
  
  constructor(
    public navCtrl: NavController,
    private _eventoNegocio:EventoNegocio

  ) {
  }
  
  
  async ngOnInit() {
    this.eventos = new Array<EventoTo>();
    this.eventos = (await this._eventoNegocio.GetEventosEmAlta())
  }
  goToEventoDetalhe(params){
    if (!params) params = {};
    this.navCtrl.push(EventoDetalhePage);
  }goToPagar(params){
    if (!params) params = {};
    this.navCtrl.push(PagarPage);
  }goToCompraEfetuada(params){
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
  }
}
