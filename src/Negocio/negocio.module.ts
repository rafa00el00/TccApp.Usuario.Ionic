import { NgModule } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { EventoService } from "./Services/evento.service";
import { AuthNegocio } from "./BO/auth.negocio";
import { EventoNegocio } from "./BO/evento.negocio";
import { HttpHelper } from "./Services/http.helper";
import { HTTP } from '@ionic-native/http'
import { CompraService } from "./Services/compra.service";
import { CompraNegocio } from "./BO/compra.negocio";
import { FeedbackNegocio } from "./BO/feedback.negocio";
import { FeedbackService } from "./Services/feedback.service";
@NgModule({
    imports:[
        
        
    ],
    providers:[
        HTTP,
        
        HttpHelper,
        AuthService,
        EventoService,
        CompraService,
        FeedbackService,

        AuthNegocio,
        EventoNegocio,
        CompraNegocio, 
        FeedbackNegocio

    ],
    
})
export class NegocioModule{
}