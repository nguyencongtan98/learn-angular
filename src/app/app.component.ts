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
      phone: '24343243243',
    },
    {
      id: 2,
      name: 'Dang Thi Truc Vy',
      phone: '432565655',
    },
    {
      id: 3,
      name: 'Nguyen Thi Ngoc Diem',
      phone: '386845348',
    },
  ];

  public txtFullName: string | undefined;
  public txtPhone: string | undefined;

  onGetFullName(value: string) {
    this.txtFullName = value;
  }

  onGetPhone(value: string) {
    this.txtPhone = value;
  }
}
