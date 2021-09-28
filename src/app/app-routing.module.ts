import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceitaComponent } from './receita/receita.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { TempoCozimentoComponent } from './tempo-cozimento/tempo-cozimento.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'receita', component: ReceitaComponent },
  { path: 'tempo-cozimento', component: TempoCozimentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
