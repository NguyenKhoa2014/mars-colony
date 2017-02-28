import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
    <router-outlet></router-outlet>
    <a routerLink="/register">Register Page</a>
    <a routerLink="/encounters">Encounter Page</a>
    <a routerLink="/report">Report Page</a>
    <a routerLink="/notfound">Not found Page</a>
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
