import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  logging(): void {
    console.log('Hello Tan Nguyen');
  }
}
