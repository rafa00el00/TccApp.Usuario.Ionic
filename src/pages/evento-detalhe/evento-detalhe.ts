import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PagarPage } from '../pagar/pagar';
import { ComprasPage } from '../compras/compras';
import { FeedBackPage } from '../feed-back/feed-back';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';
import { Evento } from '../../Negocio/Models/evento';
import { EventoTo } from '../../Negocio/Models/evento.to';

@Component({
  selector: 'page-evento-detalhe',
  templateUrl: 'evento-detalhe.html'
})
export class EventoDetalhePage implements OnInit {

  codEvento:number;
  evento:Evento;
  similares:Array<EventoTo>;
  constructor(
    public navCtrl: NavController,
    private _navParams :NavParams,
    private _eventoNegocio:EventoNegocio,
    private loadingCtrl:LoadingController

  ) {
    this.evento = new Evento();
    this.similares = [];
  this.codEvento = _navParams.get("codEvento");
    
  }

  async ngOnInit(){
    let load = this.loadingCtrl.create();
    load.present();
    this.evento = (await this._eventoNegocio.GetEvento(this.codEvento));
    this.similares = (await this._eventoNegocio.GetEventosSimilares(this.codEvento));
    load.dismiss();
  }

  goToPagar(params){
    if (!params) params = { evento : this.evento};
    this.navCtrl.push(PagarPage,params);
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
  }goToEventoDetalhe(params){
    if (!params) params = {};
    this.navCtrl.push(EventoDetalhePage,params);
  }
}
