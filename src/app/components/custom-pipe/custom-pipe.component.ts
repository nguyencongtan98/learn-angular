import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css'],
})
export class CustomPipeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public idFilter: string = '';
  public nameFilter: string = '';
  public statusFilter: string = '';

  public products: any[] = [
    {
      id: 1,
      name: 'Iphone 7',
      status: true,
    },
    {
      id: 2,
      name: 'Iphone 7 plus',
      status: false,
    },
    {
      id: 3,
      name: 'Iphone XR',
      status: false,
    },
    {
      id: 4,
      name: 'Samsung galaxy',
      status: true,
    },
  ];
}
