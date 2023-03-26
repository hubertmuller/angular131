import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  public tabela = [
    {nazwa: 'Polska', populacja: 37000000},
    {nazwa: 'Ukraina', populacja: 35300300},
    {nazwa: 'USA', populacja: 332000000}
  ];
}
