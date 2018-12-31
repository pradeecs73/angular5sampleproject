import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/Http';
import {HttpClient,HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class configservice{
    private Urldata:any;
    private checkvariable:any;
    constructor(private http:Http){
    }

    initializeURL()
    {
        return this.http.get("./../assets/constants.json")
        .map(
            (jsonurl:any)=>
            jsonurl        
        ).toPromise()
         .then((data:any) => {
          this.checkvariable="sample user loading from app initializer";
          this.Urldata=data.json();
         }).catch((err:any) => Promise.resolve());
    }

    getInitialSampleData()
    {
       return this.checkvariable;
    }

    getUrlData(){
         return this.Urldata;
    }

    /*fileupload(file:File[]):Observable<HttpEvent<{}>>
    {
      return "sampledata";
    }*/
}