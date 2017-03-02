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
  constructor() {
    this.marsAliens = [
      {'type': 'Special K', "submitted_by": "1", "id": '1', "description": "Special."},
      

    ]
   }

  ngOnInit() {
  }

}
