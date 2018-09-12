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
}