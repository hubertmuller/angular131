import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopkaComponent } from './stopka/stopka.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { ListaComponent } from './lista/lista.component';
import { FormularzComponent } from './formularz/formularz.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { SuffixPipe } from './suffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StopkaComponent,
    NaglowekComponent,
    ListaComponent,
    FormularzComponent,
    KontaktComponent,
    SuffixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
