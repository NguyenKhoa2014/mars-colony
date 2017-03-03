import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Job, Colonist, NewColonist} from '../models';
import {COLONISTS_URL} from '../models/API';

interface colonistPostRequest {
    colonist: NewColonist;
}

// export function saveColonist(newColonist: NewColonist):Observable<Colonist>{

// }
@Injectable()
export class ColonistAPIservice{
     
    constructor(private http: Http) {

    }

    saveColonist(newColonist: colonistPostRequest):Observable<Colonist>{
        const headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(COLONISTS_URL,newColonist,{headers})
            .map((res:Response) => res.json().colonist);
    }
}