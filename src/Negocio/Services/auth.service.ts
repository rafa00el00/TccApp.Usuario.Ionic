import { HttpHelper } from "./http.helper";
import { Injectable } from "@angular/core";
import { Usuario } from "../Models/Usuario";

@Injectable()
export class AuthService{
    
    private baseUrl :string;
    
    constructor(
        private http:HttpHelper
    ) {
        this.baseUrl = http.baseUrl;
    }

    DoLogin(email: string, senha: string): any {
        return this.http.Post(this.baseUrl + "/Auth/DoLogin/Usuario",{
            email,password: senha
        });
    }

    Registrar(usuario:Usuario){
        return this.http.Post(this.baseUrl + "/Auth/Usuario",usuario);
    }
}