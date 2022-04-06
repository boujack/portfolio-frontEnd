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
import { CuadroXpComponent } from './components/cuadro-xp/cuadro-xp.component';
import { CuadroEdComponent } from './components/cuadro-ed/cuadro-ed.component';
import { CuadroSkComponent } from './components/cuadro-sk/cuadro-sk.component';
import { CuadroPyComponent } from './components/cuadro-py/cuadro-py.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalXpComponent } from './components/modal-xp/modal-xp.component';
import { ModalEdComponent } from './components/modal-ed/modal-ed.component';
import { ModalSkComponent } from './components/modal-sk/modal-sk.component';
import { ModalPyComponent } from './components/modal-py/modal-py.component';
import { ModalDescComponent } from './components/modal-desc/modal-desc.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    CuadroXpComponent,
    CuadroEdComponent,
    CuadroSkComponent,
    CuadroPyComponent,
    ModalsComponent,
    ModalLoginComponent,
    ModalXpComponent,
    ModalEdComponent,
    ModalSkComponent,
    ModalPyComponent,
    ModalDescComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
