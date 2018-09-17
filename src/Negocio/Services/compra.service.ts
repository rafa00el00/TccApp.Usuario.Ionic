import { Compra } from "../Models/compra";
import { Injectable } from "@angular/core";
import { HttpHelper } from "./http.helper";

@Injectable()
export class CompraService{
    private baseUrl: string;
    
    constructor(
        private http:HttpHelper
    ) {
        this.baseUrl = http.baseUrl + "/Compra"
    }

    public GetCompra(codCompra:number){
        return this.http.Get(this.baseUrl + "/" + codCompra).then(r => {
            return JSON.parse(r.data);
        });
    }

    public GetCompras(){
        return this.http.Get(this.baseUrl + "/Usuario").then(r => {
            return JSON.parse(r.data);
        });
    }

    public PostCompra(compra:Compra){
        return this.http.Post(this.baseUrl,compra);
    }
}