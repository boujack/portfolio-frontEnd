import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { BannerComponent } from './components/banner/banner.component';
import { PlacaComponent } from './components/placa/placa.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { CuadroSkComponent } from './components/cuadro-sk/cuadro-sk.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalSkComponent } from './components/modal-sk/modal-sk.component';
import { ModalDescComponent } from './components/modal-desc/modal-desc.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SeccionComponent } from './components/seccion/seccion.component';

import {HttpClientModule} from '@angular/common/http';
import { ModalGenericoComponent } from './components/modal-generico/modal-generico.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LoginButtonComponent,
    MenuButtonComponent,
    BannerComponent,
    PlacaComponent,
    PerfilComponent,
    SeccionesComponent,
    CuadroSkComponent,
    ModalsComponent,
    ModalLoginComponent,
    ModalSkComponent,
    ModalDescComponent,
    SeccionComponent,
    ModalGenericoComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
