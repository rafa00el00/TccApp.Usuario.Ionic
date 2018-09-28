import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FeedBackPage } from '../feed-back/feed-back';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';

import { EventoDetalhePage } from '../evento-detalhe/evento-detalhe';
import { PagarPage } from '../pagar/pagar';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { CompraNegocio } from '../../Negocio/BO/compra.negocio';
import { CompraTo } from '../../Negocio/Models/compra.to';

@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html'
})
export class ComprasPage implements OnInit {
  compras: Array<CompraTo>;


  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private dialogo: AlertController,
    private compraNegocio: CompraNegocio,
  ) {
  }

  async ngOnInit(): Promise<void> {
    let load = this.loadingCtrl.create();
    load.present();
    try {
      this.compras = (await this.compraNegocio.GetCompras());
    } catch (error) {
      console.error(error);
    }
    load.dismiss();
  }

  async doRefresh(refresher) {
    try {
      this.compras = [];
      this.compras = (await this.compraNegocio.GetCompras());
      refresher.complete();
    } catch (error) {
      console.error(error);
    }

  }

  async doInfinite(infiniteScroll) {
    let cps = (await this.compraNegocio.GetCompras());

    this.compras = this.compras.concat(cps);
    infiniteScroll.complete();
  }

  goToEventoDetalhe(params) {
    if (!params) params = {};
    this.navCtrl.push(EventoDetalhePage,params);
  }
  goToFeedBack(params){
    if (!params) params = {};
    this.navCtrl.push(FeedBackPage,params);
  }
}
