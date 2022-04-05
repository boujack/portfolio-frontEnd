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
    CuadroPyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
