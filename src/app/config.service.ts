import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/Http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

export class configservice{
    checkvariable:any;
    constructor(){
    }

    initializeURL()
    {
        this.checkvariable="sample user loading from app initializer";
        return "mysampledata";
    }

    getInitialSampleData()
    {
       return this.checkvariable;
    }
}