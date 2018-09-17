import { NgModule } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { EventoService } from "./Services/evento.service";
import { AuthNegocio } from "./BO/auth.negocio";
import { EventoNegocio } from "./BO/evento.negocio";
import { HttpHelper } from "./Services/http.helper";
import { HTTP } from '@ionic-native/http'
import { CompraService } from "./Services/compra.service";
import { CompraNegocio } from "./BO/compra.negocio";
@NgModule({
    imports:[
        
        
    ],
    providers:[
        HTTP,
        
        HttpHelper,
        AuthService,
        EventoService,
        CompraService,

        AuthNegocio,
        EventoNegocio,
        CompraNegocio, 

    ],
    
})
export class NegocioModule{
}