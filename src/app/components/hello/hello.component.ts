import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  public name: string = 'Tan Nguyens';
  public age: number = 20;
  public imgLink: string =
    'https://dienthoaivui.com.vn/wp-content/uploads/2020/10/hinh-nen-iphone-12-19-scaled.jpg';
  public imgWidth: number = 500;
  public count: number = 0;
  public userName: string = '';
  public gender: number = 1;
  public names: string[] = ['tan', 'vy', 'Han'];
  public products: any = [
    {
      id: 1,
      name: 'abc',
      price: 434,
    },
    {
      id: 2,
      name: 'Iphone',
      price: 434,
    },
    {
      id: 3,
      name: 'Tble',
      price: 434,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showInfo(event: any) {
    console.log('event: ', event.target.innerText);
  }

  countInccreate() {
    this.count++;
  }

  onKeyUp(event: any) {
    console.log('event', event.target.value);
    this.name = event.target.value;
  }

  onKeyUpEnter(event: any) {
    this.userName = event.target.value;
  }
}
