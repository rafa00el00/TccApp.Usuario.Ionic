import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FeedEnviadoPage } from '../feed-enviado/feed-enviado';
import { ComprasPage } from '../compras/compras';

import { EventoDetalhePage } from '../evento-detalhe/evento-detalhe';
import { PagarPage } from '../pagar/pagar';
import { CompraEfetuadaPage } from '../compra-efetuada/compra-efetuada';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Feedback } from '../../Negocio/Models/feedback';
import { FeedbackNegocio } from '../../Negocio/BO/feedback.negocio';

@Component({
  selector: 'page-feed-back',
  templateUrl: 'feed-back.html'
})
export class FeedBackPage implements OnInit {
 
  feedback:Feedback
  nomeEvento:string;

  constructor(
    public navCtrl: NavController,
    private _navParams:NavParams,
    private loadingCtrl: LoadingController,
    private dialogCtrl: AlertController,
    private _feedbakNegocio: FeedbackNegocio
  ) {
  }

  ngOnInit(): void {
    this.feedback = <Feedback>{
      codEvento: this._navParams.get('codEvento')
    };

    this.nomeEvento = this._navParams.get('nomeEvento');

  }
  async goToFeedEnviado(){
    var load = this.loadingCtrl.create();
    load.present();
    try{
      var ret = (await this._feedbakNegocio.PostFeedback(this.feedback));
      this.navCtrl.push(FeedEnviadoPage);
    }catch(error){
      this.dialogCtrl.create({
        message: "Não foi possivel cadastrar o seu feedback"
      }).present();
    }finally{
      load.dismiss();
    }


    
  }
}
