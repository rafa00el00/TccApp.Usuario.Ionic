import { EventoService } from "../Services/evento.service";
import { Injectable } from "@angular/core";

@Injectable()
export class EventoNegocio{

    constructor(
        private _eventoService : EventoService
    ) {
    }

    public GetTags():Promise<Array<string>>{
        return this._eventoService.GetTags();
    }

    public GetEvento(codEvento:number){
        return this._eventoService.GetEvento(codEvento);
    }

    public GetEventos(){
        return this._eventoService.GetEventos();
    }

    public GetEventosEmAlta(){
        return this._eventoService.GetEventosEmAlta();
    }
    public GetEventosRecomendacoes(){
        return this._eventoService.GetEventosRecomendacoes();
    }
    public GetEventosRecomendacoesTags(){
        return this._eventoService.GetEventosRecomendacoesTags();
    }
    public GetEventosUltimosVisitados(){
        return this._eventoService.GetEventosUltimosVisitados();
    }
    public GetEventosSimilares(codEvento:number){
        return this._eventoService.GetEventosSimilares(codEvento);
    }
}