import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DaneService } from '../dane.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  public daneObs: Observable<Populacja[]>;
  public dane: Populacja[] = [];

  constructor(private daneService: DaneService) {
    this.daneObs = this.daneService.pobierzPopulacje();
    this.daneObs.subscribe( (wartosc) => {
      this.dane = wartosc;
    } );
  }
}

export interface Populacja {
  nazwa: string;
  populacja: number;
  przyrost: number;
}
