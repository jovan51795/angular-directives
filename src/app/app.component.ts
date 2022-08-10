import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  public name = "jovanie"
  public message = "";
  public msg = "";
  public count = 0;

  decrement() {
    this.count++;
  }
}
