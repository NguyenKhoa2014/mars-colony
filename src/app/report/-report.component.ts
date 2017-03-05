import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {Alien, NewEncounter,Encounter} from '../models';
import {EncountersAPIservice} from '../apiService/encounters';
import {AliensAPIservice} from '../apiService/aliens';
import {REPORT_URL} from '../models/API';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers:[AliensAPIservice]
})
export class ReportComponent implements OnInit {
  marsAliens : Alien[];
  encounter: NewEncounter;
  reportForm: FormGroup;
  link: string;
  constructor(
    private aliensAPIservice: AliensAPIservice,
    private encountersService: EncountersAPIservice,
    private router: Router
  ) 
  {
    // this.getAliens();
    
    this.reportForm = new FormGroup({
      action: new FormControl('',[Validators.required, Validators.minLength(10)]),
      type: new FormControl('',[Validators.required])
    });
   }
    
   getAliens(){
      this.aliensAPIservice.getAliens()
                            .subscribe((result) =>{
                                console.log(result);
                                this.marsAliens = result;
                             });
}
   
  ngOnInit() {
  }
  loglog() {
    console.log(this.reportForm);
  }

  getEncounterDate() {
    const today = new Date();
   
   return `${ today.getFullYear() }-${ today.getMonth() + 1 }-${ today.getDate() }`;
  };

    //  date: string;
    // colonist_id: string;
    // atype: string;
    // action: string;

  submitClick(event) {
    //event.preventDefault();
    if(this.reportForm.invalid){
      // this.link="#";
    }
    else {
      //this.link ="encouter";
      console.log('i am here');
      const alien_type = this.reportForm.get('type').value;
      const action = this.reportForm.get('action').value;
      const newencounter = new Encounter( this.getEncounterDate(),localStorage.getItem('colonist_id'),  alien_type,action, "1" ); 
      const encounterPostRequest ={encounter:newencounter}
      // this.encountersService.saveNewEncounter(encounterPostRequest).subscribe( () => {
      //   this.router.navigate(['../encounters']);
      // }, (err) => {
      //   console.log(err);
      // });
      this.router.navigate(['../encounters']);
      console.log('success submitting');
      console.log(this.reportForm);
    }
  }

}
