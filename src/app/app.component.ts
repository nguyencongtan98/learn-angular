import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isMarried: boolean = false;
  public age: number = 20;

  public users: any[] = [
    {
      id: 1,
      name: 'Nguyen Cong Tan',
      address: 'Quang Nam',
    },
    {
      id: 2,
      name: 'Dang Thi Truc Vy',
      address: 'Hoi An',
    },
    {
      id: 3,
      name: 'Nguyen Thi Ngoc Diem',
      address: 'Ha Noi',
    },
  ];
}
