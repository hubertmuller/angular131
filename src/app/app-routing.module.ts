import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: "lista", component: ListaComponent},
  { path: "formularz", component: FormularzComponent},
  { path: "kontakt", component: KontaktComponent},
  { path: "", redirectTo: '/lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
