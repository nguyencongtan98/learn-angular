import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input('married') isMarried: boolean = false;
  @Input('age') age: number | undefined;
  // @Input('name') name: string | undefined;
  public txtFullName: string = '';
  @Output('txtFullName') onHandleFullName = new EventEmitter<string>();

  public txtPhone: string | undefined;
  @Output('txtPhone') onHandlePhone = new EventEmitter<string>();

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

  onSubmitForm() {
    this.onHandleFullName.emit(this.txtFullName);
    this.onHandlePhone.emit(this.txtPhone);
  }
}
