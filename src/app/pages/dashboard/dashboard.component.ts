import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { storageService } from './../../services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public devices: any = [];

  constructor(
    private httpService: HttpService,
    private storage: storageService
  ) {}

  ngOnInit(): void {
    this.storage.GetAll('devices').subscribe((data) => {
      this.devices = data
    });
  }

  onDevice(ip: string, name: string) {
    this.httpService
      .control(`${ip}`, `${name}`, 'ON')
      .subscribe((data) => {
        console.log(data);
      });
  }

  offDevice(ip: string, name: string) {
    this.httpService
      .control(`${ip}`, `${name}`, 'OFF')
      .subscribe((data) => {
        console.log(data);
      });
  }

  addDevice(){
    console.log('works')
  }
}
