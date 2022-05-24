import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LoginButtonComponent } from './components/header/navbar/login-button/login-button.component';
import { MenuButtonComponent } from './components/header/menu-button/menu-button.component';
import { BannerComponent } from './components/banner/banner.component';
import { PlacaComponent } from './components/banner/placa/placa.component';
import { PerfilComponent } from './components/banner/perfil/perfil.component';
import { SeccionesComponent } from './components/banner/secciones/secciones.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ModalLoginComponent } from './components/modals/modal-login/modal-login.component';
import { ModalSkComponent } from './components/modals/modal-sk/modal-sk.component';
import { ModalDescComponent } from './components/modals/modal-desc/modal-desc.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {HttpClientModule} from '@angular/common/http';
import { CanvasComponent } from './components/banner/secciones/skills/canvas/canvas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EducacionComponent } from './components/banner/secciones/educacion/educacion.component';
import { EduItemComponent } from './components/banner/secciones/educacion/edu-item/edu-item.component';
import { ModalEdComponent } from './components/modals/modal-ed/modal-ed.component';
import { ModalXpComponent } from './components/modals/modal-xp/modal-xp.component';
import { ExperienciaComponent } from './components/banner/secciones/experiencia/experiencia.component';
import { XpItemComponent } from './components/banner/secciones/experiencia/xp-item/xp-item.component';
import { ModalPyComponent } from './components/modals/modal-py/modal-py.component';
import { ProyectosComponent } from './components/banner/secciones/proyectos/proyectos.component';
import { PyItemComponent } from './components/banner/secciones/proyectos/py-item/py-item.component';
import { SkillsComponent } from './components/banner/secciones/skills/skills.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
