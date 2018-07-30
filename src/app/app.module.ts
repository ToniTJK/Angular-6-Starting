import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    ConversorPipe,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
