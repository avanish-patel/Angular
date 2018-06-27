import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'Off-line';

  constructor(){

    this.serverStatus = Math.random() > 0.5 ? 'Off-line' : 'On-line'
  }

  getServerStatus() {

    return this.serverStatus;
  }

  getColor() {

    return this.serverStatus === 'On-line' ? 'green' : 'red';
  }

  ngOnInit() {
  }

}
