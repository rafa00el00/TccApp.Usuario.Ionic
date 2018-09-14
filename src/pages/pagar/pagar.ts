import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { ComprasPage } from '../compras/compras';
import { FeedBackPage } from '../feed-back/feed-back';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';
import { EventoDetalhePage } from '../evento-detalhe/evento-detalhe';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Evento } from '../../Negocio/Models/evento';
import { Pagamento } from '../../Negocio/Models/pagamento';
import { Compra } from '../../Negocio/Models/compra';

@Component({
  selector: 'page-pagar',
  templateUrl: 'pagar.html'
})
export class PagarPage {
  evento:Evento
  compra:Pagamento;
  myCompra:Compra;
  constructor(
    public navCtrl: NavController,
    private _navParams:NavParams
  ) {
    this.evento = _navParams.get("evento");
    this.compra = new Pagamento()
    this.myCompra = new Compra();
    this.myCompra.pagamento = this.compra;
    this.myCompra.nomeEvento = this.evento.nome;
    this.myCompra.codEvento = this.evento.id;
    this.myCompra.qtdIngressos = 1;
    this.myCompra.dataEvento = this.evento.dataEvento;
    this.myCompra.valorTotal = this.evento.valor;

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
