import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DaneService } from '../dane.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnDestroy{
  public daneObs: Observable<Populacja[]>;
  public dane!: Populacja[];
  //public saDane = false;
  private daneObsSub: Subscription;

  constructor(private daneService: DaneService) {
    this.daneObs = this.daneService.pobierzPopulacje();
    this.daneObsSub = this.daneObs.subscribe( (wartosc) => {
      this.dane = wartosc;
      //this.saDane = true;
    } );

  }
  ngOnDestroy(): void {
    //konieczne dla observabli generujacych duzo wartosci. nie jest konieczne dla http.get
    this.daneObsSub.unsubscribe();
  }
}

export interface Populacja {
  nazwa: string;
  populacja: number;
  przyrost: number;
}
