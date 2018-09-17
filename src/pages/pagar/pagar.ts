import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { Evento } from '../../Negocio/Models/evento';
import { Pagamento } from '../../Negocio/Models/pagamento';
import { Compra } from '../../Negocio/Models/compra';
import { CompraNegocio } from '../../Negocio/BO/compra.negocio';

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
    private _navParams:NavParams,
    private _compraNegocio:CompraNegocio,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
  ) {
    this.evento = _navParams.get("evento");
    this.compra = new Pagamento()
    this.myCompra = new Compra();
    this.myCompra.pagamento = this.compra;
    this.myCompra.descricao = this.evento.nome;
    this.myCompra.itemId = this.evento.id.toString();
    this.myCompra.qtd = 1;
    this.myCompra.dataEvento = this.evento.dataEvento;
    this.myCompra.valor = this.evento.valor;

  }

  async EfetuarPagamento(){
    
    let load = this.loadingCtrl.create();
    load.present();

    let resp = await this._compraNegocio.PostCompra(this.myCompra);
    load.dismiss();

    if(resp.ok){
      this.navCtrl.push(CompraEfetuadaPage);
    }
    else{
      this.alertCtrl
      .create({
        message:"Falha ao efetuar a compra"
      }).present();
    }



  }

  
}
