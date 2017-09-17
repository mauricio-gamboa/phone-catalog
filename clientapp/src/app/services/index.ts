import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Phone } from '../models';

@Injectable()
export class PhoneServices {
    private API = 'http://localhost:3000'

    constructor(private http: Http) { }

    findPhones(): Observable<Phone[]> {
        return this.http.get(`${this.API}/phones`).map(res => res.json());
    }
}