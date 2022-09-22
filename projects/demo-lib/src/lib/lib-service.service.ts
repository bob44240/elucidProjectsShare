import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibServiceService {
  constructor() {}

  getTime() {
    let newTime = new Date();
    return newTime;
  }
}
