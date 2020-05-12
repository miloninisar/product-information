import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})


export class skuService{
    private _http:HttpClient;
    constructor(http:HttpClient){

        this._http=http;
    }

    TestMethod(){
        return 'HI AGAIN FROM SERVICE....'
    }

    readJsonData()
    {
       return this._http.get("./assets/data.json")
    }
}