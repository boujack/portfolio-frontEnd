import { NgModule} from '@angular/core';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
const routes: Routes = [
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'proyectos', component: ProyectosComponent},
  { path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{onSameUrlNavigation: "reload"})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { 
}
