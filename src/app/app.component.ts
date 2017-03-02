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
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
