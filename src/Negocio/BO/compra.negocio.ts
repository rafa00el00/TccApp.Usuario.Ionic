import { CompraService } from "../Services/compra.service";
import { Compra } from "../Models/compra";
import { Injectable } from "@angular/core";

@Injectable()
export class CompraNegocio {


    constructor(
        private _compraService:CompraService
    ) {
    }

    public GetCompra(codCompra:number){
        return this._compraService.GetCompra(codCompra);
    }

    public GetCompras(){
        return this._compraService.GetCompras();
    }

    public PostCompra(compra:Compra){
        return this._compraService.PostCompra(compra);
    }
}