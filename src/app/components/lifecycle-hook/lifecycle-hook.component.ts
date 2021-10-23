import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css'],
})
export class LifecycleHookComponent implements OnInit {
  constructor() {
    console.log('Contrustor');
  }

  ngOnInit(): void {
    console.log(' On init');
  }
}
