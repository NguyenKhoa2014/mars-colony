import { Component, OnInit } from '@angular/core';
 
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

import {Alien, NewEncounter,Encounter} from '../models';
import {AliensAPIservice} from '../apiService/alients';
import {REPORT_URL} from '../models/API'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers:[AliensAPIservice]
})
export class ReportComponent implements OnInit {
  marsAliens : Alien[];
  reportForm: FormGroup;
  link: string;
  constructor(private aliensAPIservice: AliensAPIservice) {
    this.getAliens();
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

  getDate() {
    const today = new Date();
   
   return `${ today.getFullYear() }-${ today.getMonth() + 1 }-${ today.getDate() }`;
  };

//   export class Encounter {
//     id: number;
//     date: string;
//     atype: string;
//     action: string;
//     colonist_id: string;
// }

  submitClick(event) {
    //event.preventDefault();
    if(this.reportForm.invalid){
      this.link="#";
    }
    else {
      //this.link ="encouter";
      const alien_type = this.reportForm.get('type').value;
      const action = this.reportForm.get('action').value;
      const encounter = new Encounter( "1", this.getDate(), alien_type,action, "1" ); 
      console.log('success submitting');
      console.log(this.reportForm);
    }
  }

}
