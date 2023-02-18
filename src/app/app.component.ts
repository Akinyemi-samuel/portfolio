import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  visible:boolean = false
  
  onclick() {
    this.visible = !this.visible;
  }
  title = 'portfolio';
}
