import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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
    private _eventoNegocio: EventoNegocio,
    private loadingCtrl: LoadingController

  ) {
  }


  async ngOnInit() {
    let load = this.loadingCtrl.create();
    load.present();
    try {

      this.eventos = new Array<EventoTo>();
      this.eventos = (await this._eventoNegocio.GetEventosEmAlta())
    } catch (error) {
      console.error(error);
    }
    load.dismiss();

  }

  async doRefresh(refresher) {
    try {
      this.eventos = [];
      this.eventos = (await this._eventoNegocio.GetEventosEmAlta());
      refresher.complete();
    } catch (error) {
      console.error(error);
    }

  }

  async doInfinite(infiniteScroll) {
    let evs = (await this._eventoNegocio.GetEventosEmAlta());
    this.eventos = this.eventos.concat(evs);
    infiniteScroll.complete();
  }
  goToEventoDetalhe(params) {
    if (!params) params = {};
    this.navCtrl.push(EventoDetalhePage, params);
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
  }
}
