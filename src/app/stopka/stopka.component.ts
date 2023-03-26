import { Component } from '@angular/core';
import { LogikaService } from '../logika.service';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss'],
  providers: [LogikaService]
})
export class StopkaComponent {
  constructor(private logika: LogikaService) {
    
  }
}
