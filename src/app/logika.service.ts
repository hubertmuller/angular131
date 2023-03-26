import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogikaService {

  constructor() { }

  dodawanie(l1:number,l2:number):number {
    return l1 + l2;
  }
}
