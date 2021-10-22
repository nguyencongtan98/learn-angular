import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent implements OnInit {
  public isShow: boolean = true;
  public user: string = 'Tan nguyen';
  public isChecked: boolean = false;
  public age: number = 0;
  public users: any[] = [
    {
      name: 'Tan Nguyen',
      address: 'USA',
    },
    {
      name: 'Truccs Vy',
      address: 'VN',
    },
    {
      name: 'Tan Tai',
      address: 'USA',
    },
    {
      name: 'Diem',
      address: 'ENG',
    },
  ];

  public names: string[] = ['Ho chi minh ', 'Ha Noi'];

  public products: any[] = [];

  public dataFromServer = [
    {
      id: 1,
      name: 'Iphone 6 Plus',
      price: 32332,
    },
    {
      id: 2,
      name: 'Iphone 12',
      price: 3243,
    },
    {
      id: 3,
      name: 'Iphone XR',
      price: 65,
    },
    {
      id: 4,
      name: 'Oppo F2',
      price: 878787,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.isShow = !this.isShow;
  }
  onChange(value: boolean) {
    console.log(value);
    this.isChecked = value;
  }

  onLoadData() {
    this.products = this.dataFromServer;
  }
  myTracbyFunction(index: number, item: any) {
    return item.id;
  }
}
