import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input('married') isMarried: boolean = false;
  @Input('age') age: number | undefined;
  // @Input('name') name: string | undefined;

  private _name: string = '';

  constructor() {}

  ngOnInit(): void {}

  @Input()
  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
