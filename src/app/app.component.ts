import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alurapic';
  photos: Object[] = [];

  constructor(http: HttpClient) {
    const observable = http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe((photos) => (this.photos = photos));
  }
}
