import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Button-Project';
  revealUniverse = false;
  log = [6];

  onToggleDetails() {
    this.revealUniverse = !this.revealUniverse;
    this.log.push(this.log.length + 1);
  }
}
