import { Component, OnInit } from '@angular/core';
import {NewEncounter} from '../models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {
  id: string;
  date: string;
  colonist_id: string;
  atype: string;
  action: string;
  marEncounters : NewEncounter [];
  constructor() {
    this.marEncounters = [
       {"id": '3', 
       "date": '2016-11-18', 
       "colonist_id": '8', 
       "atype": "The Predator", 
       "action": "Rubbed mud on self to hide from heat sensors." 
      },
      {
        "id": '4',
        "date": '2016-11-18',
        "colonist_id": '10',
        "atype": "Special K",
        "action": "Hunted the alien known as \"Special K\".\nHe offered donuts for his life. Took donuts, killed anyway."
      }
    ]
   }

  ngOnInit() {
  }



}
