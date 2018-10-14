import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComprasPage } from '../compras/compras';
import { TodosOsEventosPage } from '../todos-os-eventos/todos-os-eventos';
import { RecomendadosPage } from '../recomendados/recomendados';
import { EmAltaPage } from '../em-alta/em-alta';
import { PerfilPage } from '../perfil/perfil';
import { RecomendadosTagsPage } from '../recomendado-tags/recomendados-tags';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ComprasPage;
  tab2Root: any = TodosOsEventosPage;
  tab3Root: any = RecomendadosPage;
  tab4Root: any = EmAltaPage;
  tab5Root: any = RecomendadosTagsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
