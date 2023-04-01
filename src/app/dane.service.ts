import { Injectable } from '@angular/core';
import { Populacja } from './lista/lista.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaneService {

  private dane: Populacja[] = [
    {nazwa: 'Polska', populacja: 37000000, przyrost: 0.7},
    {nazwa: 'Ukraina', populacja: 35300300, przyrost: 0.6},
    {nazwa: 'USA', populacja: 332000000, przyrost: 0.72}
  ];


  pobierzPopulacje(): Observable<Populacja[]> {
    return this.http.get<Populacja[]>('https://6427f2e8161067a83b03da40.mockapi.io/ludnosc');
    //return this.dane;
  }

  constructor(private http: HttpClient) { }
}
