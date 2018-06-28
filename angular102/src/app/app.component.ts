import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  ninja = {
    name : "Ryu",
    belt : "Red"
  };

  press(e){
    alert("Root component pressed.");
  }

}
