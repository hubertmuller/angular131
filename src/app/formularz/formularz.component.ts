import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent {

  public forma = new FormGroup( {
    imie: new FormControl(
      "Jan", 
      {validators: [], updateOn: "change"} 
    ),
    poczestunek: new FormGroup( {
      kawa: new FormControl(false, {validators: [], updateOn: "change"}),
      herbata: new FormControl(false, {validators: [], updateOn: "change"})
    }),
    plec: new FormControl(
      null, 
      {validators: [], updateOn: "change"} 
    ),
    komentarze: new FormControl(
      "moj komentarz", 
      {validators: [], updateOn: "change"} 
    ),
    dzieci: new FormControl(null, 
      {validators: [], updateOn: "change"} )
  } );




}
