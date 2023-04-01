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
import { TlumaczPipe } from './tlumacz.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StopkaComponent,
    NaglowekComponent,
    ListaComponent,
    FormularzComponent,
    KontaktComponent,
    SuffixPipe,
    TlumaczPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
