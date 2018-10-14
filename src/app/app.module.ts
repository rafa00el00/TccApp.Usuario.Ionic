import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ComprasPage } from '../pages/compras/compras';
import { TodosOsEventosPage } from '../pages/todos-os-eventos/todos-os-eventos';
import { RecomendadosPage } from '../pages/recomendados/recomendados';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { EmAltaPage } from '../pages/em-alta/em-alta';
import { SignupPage } from '../pages/signup/signup';
import { TagsRegistroPage } from '../pages/tags-registro/tags-registro';
import { LoginPage } from '../pages/login/login';
import { EventoDetalhePage } from '../pages/evento-detalhe/evento-detalhe';
import { PagarPage } from '../pages/pagar/pagar';
import { CompraEfetuadaPage } from '../pages/compra-efetuada/compra-efetuada';
import { FeedBackPage } from '../pages/feed-back/feed-back';
import { FeedEnviadoPage } from '../pages/feed-enviado/feed-enviado';
import { PerfilPage } from '../pages/perfil/perfil';
import { Tab5DefaultPagePage } from '../pages/tab5default-page/tab5default-page';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NegocioModule } from '../Negocio/negocio.module';
import { RecomendadosTagsPage } from '../pages/recomendado-tags/recomendados-tags';

@NgModule({
  declarations: [
    MyApp,
    ComprasPage,
    TodosOsEventosPage,
    RecomendadosPage,
    RecomendadosTagsPage,
    TabsControllerPage,
    EmAltaPage,
    SignupPage,
    TagsRegistroPage,
    LoginPage,
    EventoDetalhePage,
    PagarPage,
    CompraEfetuadaPage,
    FeedBackPage,
    FeedEnviadoPage,
    PerfilPage,
    Tab5DefaultPagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NegocioModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ComprasPage,
    TodosOsEventosPage,
    RecomendadosPage,
    RecomendadosTagsPage,
    TabsControllerPage,
    EmAltaPage,
    SignupPage,
    TagsRegistroPage,
    LoginPage,
    EventoDetalhePage,
    PagarPage,
    CompraEfetuadaPage,
    FeedBackPage,
    FeedEnviadoPage,
    PerfilPage,
    Tab5DefaultPagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}