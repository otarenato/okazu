import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReceitasModule } from './receitas/receitas.module';
import { ReceitaModule } from './receita/receita.module';
import { TempoCozimentoModule } from './tempo-cozimento/tempo-cozimento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    ReceitasModule,
    ReceitaModule,
    TempoCozimentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
