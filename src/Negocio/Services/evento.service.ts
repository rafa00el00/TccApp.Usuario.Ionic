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

    
}