import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css'],
})
export class AttributeComponent implements OnInit {
  public isSpecial: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onToggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }

  onChangeStyle() {
    return { color: this.isSpecial ? 'blue' : 'yellow', background: 'green' };
  }
}
