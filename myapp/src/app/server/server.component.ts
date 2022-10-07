import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverID: number = 10;
  serverStatus: String = 'online';
  testServer = false;

  constructor() {}

  ngOnInit(): void {}

  onCreateServer() {
    console.log('server Create');
  }
}
