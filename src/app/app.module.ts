import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerCitasComponent } from './components/ver-citas/ver-citas.component';
import { PantallaProgramadoresComponent } from './components/pantalla-programadores/pantalla-programadores.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DomseguroPipe } from './domseguro.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCuponComponent } from './components/form-cupon/form-cupon.component';

@NgModule({
  declarations: [
    AppComponent,
    AlojamientosComponent,
    RegistroCitasComponent,
    VerCitasComponent,
    PantallaProgramadoresComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DomseguroPipe,
    FormCuponComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
