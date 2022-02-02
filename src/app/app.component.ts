import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Richard Gallagher S00213947';
  thingsToDo =[
  'Learn Javascript', 
  'Learn Angular',
  'Learn Redux'
  ];
  thingsCompleted =[];

  summary():string{
    return`${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  }

  constructor() {
    setInterval(() => {
      this.thingsToDo.push('make coffee');
    }, 1000);
  }
}
