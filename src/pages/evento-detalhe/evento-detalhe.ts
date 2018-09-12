import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PagarPage } from '../pagar/pagar';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { ComprasPage } from '../compras/compras';
import { FeedBackPage } from '../feed-back/feed-back';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';
import { Evento } from '../../Negocio/Models/evento';

@Component({
  selector: 'page-evento-detalhe',
  templateUrl: 'evento-detalhe.html'
})
export class EventoDetalhePage implements OnInit {

  codEvento:number;
  evento:Evento;
  constructor(
    public navCtrl: NavController,
    private _navParams :NavParams,
    private _eventoNegocio:EventoNegocio,

  ) {
  this.codEvento = _navParams.get("codEvento");
    
  }

  async ngOnInit(){
    this.evento = (await this._eventoNegocio.GetEvento(this.codEvento));
  }

  goToPagar(params){
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
  }goToEventoDetalhe(params){
    if (!params) params = {};
    this.navCtrl.push(EventoDetalhePage);
  }
}
