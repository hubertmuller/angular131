import { Component, Input } from '@angular/core';
import { LogikaService } from '../logika.service';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.scss']
})
export class NaglowekComponent {
  @Input()
  public nazwa = 'Naglowek';
  private tajne = 'prywatnedane';

  @Input()
  public liczba1 = 0;

  @Input()
  public liczba2 = 0;

  constructor(private logika: LogikaService, ) {
    console.log('wywolano konstruktor naglowka');
    //this.logika.dodawanie(1,2);
  }

  public dodaj(l1:number, l2: number): number {
    return this.logika.dodawanie(l1,l2);
  }

  public getTajne(): string {
    return this.tajne;
  }
 }
