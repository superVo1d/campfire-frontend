import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BodyClassService {
  private className: string | [] = '';

  public addBodyClass(className: string | []) {
    this.className = className;

    if (className instanceof Array) {
      className.map((value) => document.body.classList.add(value));
    } else {
      document.body.classList.add(className as string);
    }
  }

  public removeBodyClass(className: string | []) {
    this.className = '';

    if (className instanceof Array) {
      className.map((value) => document.body.classList.remove(value));
    } else {
      document.body.classList.remove(className as string);
    }
  }
}
