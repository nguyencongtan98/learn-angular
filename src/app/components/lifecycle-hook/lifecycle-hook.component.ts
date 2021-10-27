import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css'],
})
export class LifecycleHookComponent implements OnInit, OnDestroy, OnChanges {
  @Input('total') total: number | undefined;

  constructor() {
    console.log('Contrustor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(' On OnChanges', changes);
  }
  ngOnDestroy(): void {
    console.log(' On detroyed');
  }

  ngOnInit(): void {
    console.log(' On init');
  }
}
