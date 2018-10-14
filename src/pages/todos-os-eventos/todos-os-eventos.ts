import { Component, OnInit } from '@angular/core';
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
  selector: 'page-todos-os-eventos',
  templateUrl: 'todos-os-eventos.html'
})
export class TodosOsEventosPage implements OnInit {
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
    this.eventos = new Array<EventoTo>();
    this.eventos = (await this._eventoNegocio.GetEventos())
    load.dismiss();

  }

  async doRefresh(refresher) {
    try {

      this.eventos = [];
      this.eventos = (await this._eventoNegocio.GetEventos());
    } catch (error) {
      console.error(error);
    }
    refresher.complete();

  }

  async doInfinite(infiniteScroll) {
    let evs = (await this._eventoNegocio.GetEventos());
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
