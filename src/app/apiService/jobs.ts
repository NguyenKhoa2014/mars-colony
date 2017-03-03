import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Job, Colonist, NewColonist} from '../models';
import {JOBS_URL} from '../models/API';

 

// export function saveColonist(newColonist: NewColonist):Observable<Colonist>{

// }
@Injectable()
export class  JobsAPIservice{
     
    constructor(private http: Http) {

    }
    
    getMarsJobs():Observable<Job[]> {
        return this.http.get(JOBS_URL)
                 .map( (res:Response) => res.json().jobs  );   
    }     
}