import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input('users') users: any[] | undefined;
  @Input('fullName') fullName: string | undefined;
  @Input('phone') phone: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
