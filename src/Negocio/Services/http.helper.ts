import { Injectable } from "@angular/core";
import { HTTP } from '@ionic-native/http'
import { Header } from "ionic-angular";

@Injectable()
export class HttpHelper {

    public baseUrl :string = "http://192.168.137.1:5000/api";
    constructor(
        private http: HTTP
    ) {
    }


    private header() {
        
        return {
            "Accept": "application/json",
            "Content-Type": "application/json"
            };
    }
    public Get(url: string): Promise<any> {
        this.http.setDataSerializer("json");
        this.http.setHeader("Accept", "Accept", "application/json");
        this.http.setHeader("Content-Type", "Content-Type", "application/json");
        return this.http.get(url, {}, this.header());
    }

    public Post(url: string, content: any): Promise<any> {
        this.http.setDataSerializer("json");
        this.http.setHeader("Accept", "Accept", "application/json");
        this.http.setHeader("Content-Type", "Content-Type", "application/json");
        return this.http.post(url, content, this.header())
            .then(resp => {
                return { ok:true, resp};
            }).catch(resp => {
                return { ok:false, resp};
            });
    }

    public Patch(url: string, content: any): Promise<any> {
        this.http.setDataSerializer("json");
        this.http.setHeader("Accept", "Accept", "application/json");
        this.http.setHeader("Content-Type", "Content-Type", "application/json");
        return this.http.patch(url, content, this.header());
    }
}