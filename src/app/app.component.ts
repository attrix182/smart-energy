import { HttpService } from './services/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'smart-energy';

  constructor(private httpService: HttpService) {}

  onLed() {
    this.httpService.control('http://192.168.2.113/', 'LED', 'ON').subscribe((data) => {
      console.log(data);
    });
  }

  offLed() {
    this.httpService.control('http://192.168.2.113/', 'LED', 'OFF').subscribe((data) => {
      console.log(data);
    });
  }
}
