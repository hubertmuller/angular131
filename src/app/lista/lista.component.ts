import { Component } from '@angular/core';
import { DaneService } from '../dane.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  public dane: Populacja[];

  constructor(private daneService: DaneService) {
    this.dane = this.daneService.pobierzPopulacje();
  }
}

export interface Populacja {
  nazwa: string;
  populacja: number;
  przyrost: number;
}
