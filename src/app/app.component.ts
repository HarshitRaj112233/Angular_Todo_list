import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cwh-tutorial';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'Angular Tutorial';
    // }, 2000);
  }
}
