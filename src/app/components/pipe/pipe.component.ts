import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  public content: string = `
  Why do we use it?
  It is a long established fact that a reader will be 
  distracted by the readable content of a page when 
  `;

  constructor() {}

  ngOnInit(): void {}
}
