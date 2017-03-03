
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Encounter ,NewEncounter,Job, Colonist, NewColonist,Alien} from '../models';
import {ENCOUNTERS_URL} from '../models/API';

interface EncounterPostRequest {
    encounter: NewEncounter;
}

// export function saveColonist(newColonist: NewColonist):Observable<Colonist>{

// }
@Injectable()
export class EncountersAPIservice{
     
    constructor(private http: Http) {

    }

    getEncounters():Observable<Encounter[]>{

    }

    saveNewEncounter(newEncounter: EncounterPostRequest):Observable<Encounter>{

    }

 
}