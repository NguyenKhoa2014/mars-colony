import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    
     
    <p class="subtitle"><em>{{subTitle}}</em></p>
    
    <p>New Title: <input [(ngModel)]="input"  ></p>
    <p>Another message <input (keyup)="otherStuff ($event)"></p>
    <button (click)="changeTitle()">Change that title </button> <span>You have clicked the button {{clickCount}} times</span>
  `,  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  subTitle ='';
  input = '';
  clickCount =0;
  valueOfInput ='';
  others ='';
  changeTitle(event){
     this.title = this.input;
     this.subTitle = this.others;
     this.clickCount++;
  }
  something(event){
    this.valueOfInput =  event.target.value;
  }
  otherStuff(event){
    this.others = event.target.value;
  }
}
