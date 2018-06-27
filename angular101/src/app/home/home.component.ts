import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the Homepage...!";
  myString = "Type name of Chicken";
  myBoolean = false;


  ninja = {
    name : "Yoshi",
    belt : "Red"
  };

  constructor() { }

  alertMe(){
    alert("Alerted from event binding");
  }

  alertMeWithValue(value){
    alert(value);
  }

  ngOnInit() {
  }

}
