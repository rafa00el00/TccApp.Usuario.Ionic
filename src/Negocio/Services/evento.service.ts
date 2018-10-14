import { HttpHelper } from "./http.helper";
import { Injectable } from "@angular/core";

@Injectable()
export class EventoService{
    baseUrl: string;
    
    
    constructor(
        private http:HttpHelper
    ) {
        this.baseUrl = http.baseUrl + "/Evento";
    }

    public GetTags():Promise<Array<string>>{
        return this.http.Get(this.baseUrl + "/Tags").then(r => {
            return JSON.parse(r.data);
        });
    }

    public GetEvento(codEvento:number){
        return this.http.Get(this.baseUrl + "/" + codEvento).then(r => {
            return JSON.parse(r.data);
        });
    }

    public GetEventos(){
        return this.http.Get(this.baseUrl + "").then(r => {
            return JSON.parse(r.data);
        });
    }

    public GetEventosEmAlta(){
        return this.http.Get(this.baseUrl + "/EmAlta").then(r => {
            return JSON.parse(r.data);
        });
    }
    public GetEventosRecomendacoes(){
        return this.http.Get(this.baseUrl + "/Recomendacoes").then(r => {
            return JSON.parse(r.data);
        });
    }
    public GetEventosRecomendacoesTags(){
        return this.http.Get(this.baseUrl + "/RecomendacoesTags").then(r => {
            return JSON.parse(r.data);
        });
    }
    public GetEventosUltimosVisitados(){
        return this.http.Get(this.baseUrl + "/UltimosVisitados").then(r => {
            return JSON.parse(r.data);
        });
    }
    public GetEventosSimilares(codEvento:number){
        return this.http.Get(this.baseUrl + "/Recomendado/" + codEvento).then(r => {
            return JSON.parse(r.data);
        });
    }

    
}