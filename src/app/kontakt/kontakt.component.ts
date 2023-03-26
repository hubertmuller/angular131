import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnDestroy, OnInit {
  constructor() {
    console.log('Konstruktor Kontakt');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Kontakt');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit Kontakt');
  }
}
