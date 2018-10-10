import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DisplayService {

    private serviceURL = 'assets/data.json';
    constructor(private http: HttpClient) { }


    public get() {
        return this.http.get(`${this.serviceURL}`);
    }
}



