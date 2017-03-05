import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {NewEncounter} from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import {EncountersAPIservice} from '../apiService/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers:[EncountersAPIservice]
})
 
export class EncountersComponent implements OnInit {
  id: string;
  date: string;
  colonist_id: string;
  atype: string;
  action: string;
  marEncounters : NewEncounter [];
  constructor(
    private encoutersAPIService : EncountersAPIservice,
    private router: Router,
    private route: ActivatedRoute
  ) {

      encoutersAPIService.getEncounters().subscribe(
        (result) => {
            //console.log(result);
            this.marEncounters = result;
        },(err) =>{
          console.log(err);
        })
   }

  ngOnInit() {
  }

  onClickReportEncounter(event) {
    event.preventDefault();
    this.router.navigate(['../report']);
  }

}
