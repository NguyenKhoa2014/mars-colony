import { Component, OnInit } from '@angular/core';
import {NewColonist, Job} from '../models';
import { JOBS_URL, COLONISTS_URL } from '../models/API';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {ColonistAPIservice} from '../apiService/colonist';
import {JobsAPIservice} from '../apiService/jobs';
import {AliensAPIservice} from '../apiService/aliens';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[ColonistAPIservice, JobsAPIservice,AliensAPIservice]
})
export class RegisterComponent implements OnInit {
  colonist: NewColonist;
  marsJobs: Job[];
  
  registerForm: FormGroup;
  clickedButton: false;

  constructor(
    private colonistApiService: ColonistAPIservice,
    private jobsAPIservice: JobsAPIservice,
    private router: Router
  ) 
  { 
    //ToDo: call API, get jobs
    this.getMarsJobs();
    this.clickedButton = false;
     
    this.registerForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.maxLength(100)]),
      age: new FormControl('',[Validators.required, this.acceptAge(18,50)]),
      job_id: new FormControl('',[Validators.required])
    })
    
  }
 
  ngOnInit() {

  }

  getMarsJobs(){
    console.log('getting jobs');
    this.jobsAPIservice.getMarsJobs()
                            .subscribe((result)=>{
                                this.marsJobs= result;
                            } )
       
  }
  postNewColonist(event){
    
    event.preventDefault();
    if (this.registerForm.invalid){
      console.log(this.registerForm);
    }
    else {
       
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;  
      const newColonist:NewColonist = new NewColonist(name,age,job_id);
      const colonistPostRequest = {colonist: newColonist};
      
      this.colonistApiService.saveColonist(colonistPostRequest)
                            .subscribe((result)=>{
                              console.log('inside subscribe');
                               
                              console.log('the colonist was saved', result);
                             localStorage.setItem('colonist_id',result.id.toString());
                             console.log(localStorage);
                             this.router.navigate(['/encounters']);
                            }, (err) =>{
                                          console.log(err);
                            } )
       
    }
  }

  

  acceptAge (min:number, max:number) {
    return (control: AbstractControl):{[key:string]:any} => {
      if(control.value < min || control.value > max ) {
        return ['Sorry good luck!'];
      }
    }

  }



}


