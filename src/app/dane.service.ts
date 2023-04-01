import { Injectable } from '@angular/core';
import { Populacja } from './lista/lista.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaneService {

  pobierzPopulacje(): Observable<Populacja[]> {
    return this.http.get<Populacja[]>('https://6427f2e8161067a83b03da40.mockapi.io/ludnosc');
    //return this.dane;
  }

  constructor(private http: HttpClient) { }
}
