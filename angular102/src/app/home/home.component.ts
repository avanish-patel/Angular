import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // getting the input from root component
  @Input() ninja;
  @Output() onPress = new EventEmitter();

  onPressButton(e){
    this.onPress.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
