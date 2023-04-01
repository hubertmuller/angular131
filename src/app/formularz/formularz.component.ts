import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnDestroy {

  private sub: Subscription;
  public schowajPoczestunek = false;
  public forma = new FormGroup( {
    imie: new FormControl(
      "Jan", 
      {validators: [Validators.minLength(3), Validators.maxLength(10)], updateOn: "change"} 
    ),
    poczestunek: new FormGroup( {
      kawa: new FormControl(false, {validators: [], updateOn: "change"}),
      herbata: new FormControl(false, {validators: [], updateOn: "change"})
    }),
    plec: new FormControl<string|null>(
      null, 
      {validators: [], updateOn: "change"} 
    ),
    komentarze: new FormControl(
      "moj komentarz", 
      {validators: [], updateOn: "change"} 
    ),
    dzieci: new FormControl<number|null>(null, 
      {validators: [], updateOn: "change"} )
  } );

  public zmien():void {
    this.forma.controls.imie.setValue("Hubert");
    this.forma.controls.komentarze.setValue("");
    this.forma.controls.plec.setValue(null);
    this.forma.controls.dzieci.setValue(null);
  }

  constructor() {
      this.sub = this.forma.controls.imie.valueChanges.subscribe(
        (wartoscImienia) => {
          if (wartoscImienia == 'Anna') {
            this.forma.controls.plec.setValue("k");
            this.forma.controls.dzieci.setValue(1);
            this.schowajPoczestunek = false;
          } else if (wartoscImienia == 'Adam') {
            this.forma.controls.plec.setValue("m");
            this.forma.controls.dzieci.setValue(0);
            this.schowajPoczestunek = true;
          } else {
            this.schowajPoczestunek = false;
          }
        }
      );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
