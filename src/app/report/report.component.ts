import { Component, OnInit } from '@angular/core';
import {Alien} from '../models';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  marsAliens : Alien[];
  reportForm: FormGroup;
  link: string;
  constructor() {
    this.marsAliens = [
      {'type': 'Special K', "submitted_by": "1", "id": '1', "description": "Special."},
      {"type": "Endomorph", "submitted_by": "1", "id": '2',"description": "Slimy, and gross."},
      {"type": "Octospider", "submitted_by": "1", "id": '4', "description": "Rendevous with Rama."},

    ];
    this.reportForm = new FormGroup({
      action: new FormControl('',[Validators.required, Validators.minLength(10)]),
      type: new FormControl('',[Validators.required])
    })
   }
    
   
  ngOnInit() {
  }
  loglog() {
    console.log(this.reportForm);
  }

  submitClick(event) {
    event.preventDefault;
    if(!this.reportForm.invalid){
      this.link="#";
    }
    else {
      this.link ="encouter";
      console.log(this.reportForm);
    }
  }

}
