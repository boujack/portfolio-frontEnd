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
import { ModalsComponent } from './components/modals/modals.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalSkComponent } from './components/modal-sk/modal-sk.component';
import { ModalDescComponent } from './components/modal-desc/modal-desc.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {HttpClientModule} from '@angular/common/http';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EduItemComponent } from './components/edu-item/edu-item.component';
import { ModalEdComponent } from './components/modal-ed/modal-ed.component';
import { ModalXpComponent } from './components/modal-xp/modal-xp.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { XpItemComponent } from './components/xp-item/xp-item.component';
import { ModalPyComponent } from './components/modal-py/modal-py.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PyItemComponent } from './components/py-item/py-item.component';
import { SkillsComponent } from './components/skills/skills.component';

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
    ModalsComponent,
    ModalLoginComponent,
    ModalSkComponent,
    ModalDescComponent,
    CanvasComponent,
    EducacionComponent,
    EduItemComponent,
    ModalEdComponent,
    ModalXpComponent,
    ExperienciaComponent,
    XpItemComponent,
    ModalPyComponent,
    ProyectosComponent,
    PyItemComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
