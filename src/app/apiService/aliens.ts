import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Job, Colonist, NewColonist,Alien} from '../models';
import {ALIENS_URL} from '../models/API';

 

// export function saveColonist(newColonist: NewColonist):Observable<Colonist>{

// }
@Injectable()
export class AliensAPIservice{
    constructor(private http: Http) {

    }
    getAliens():Observable<Alien[]>{
        const headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.get(ALIENS_URL, {headers})
            .map( (res:Response) => res.json().aliens );   
    }
}
