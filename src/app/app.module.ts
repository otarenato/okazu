import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReceitasModule } from './receitas/receitas.module';
import { ReceitaModule } from './receita/receita.module';

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
    ReceitaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
