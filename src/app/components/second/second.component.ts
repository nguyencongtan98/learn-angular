import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  private _logginService: LoggingService;
  constructor(_logginService: LoggingService) {
    this._logginService = _logginService;
  }

  ngOnInit(): void {}

  lick() {
    this._logginService.logging();
  }

  logging(): void {}
}
