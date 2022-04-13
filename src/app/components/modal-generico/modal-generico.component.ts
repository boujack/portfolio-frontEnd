import { Component, OnInit, Input } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-modal-generico',
  templateUrl: './modal-generico.component.html',
  styleUrls: ['./modal-generico.component.css']
})
export class ModalGenericoComponent implements OnInit {
  @Input() visible:string;
  errorMsg:boolean[]=[false,false,false,false];
  labels:string[][]=[["Empresa:","Puesto:","Fecha de Ingreso:","Fecha de Egreso:"],
                     ["Institucion:","Titulo:","Fecha de Inicio:","Fecha de Egreso:"],
                     ["","","",""],
                     ["Proyecto","Descripcion","Inicio:","Finalizacion:"]];
  label:string[];
  titles:string[]=["Añadir Experiencia Laboral","Añadir Estudio","","Añadir Proyecto"];
  titulo:string;
  @Input() modalId:number;
  constructor(private dataSvc:DatosService) { }

  ngOnInit(): void {
    this.titulo=this.titles[this.modalId-10];
    this.label=this.labels[this.modalId-10];
  }
  validacion(e:string,p:string,fi:string,fe:string){
    if(e.length>3 && e.length<=20)
      this.errorMsg[0]=false;
    else
      this.errorMsg[0]=true;
    if(p.length>3 && p.length<=20)
      this.errorMsg[1]=false;
    else
      this.errorMsg[1]=true;
    if(fi.length==10)
      this.errorMsg[2]=false;
    else
      this.errorMsg[2]=true;
    if(fe.length==10)
      this.errorMsg[3]=false;
    else
      this.errorMsg[3]=true;
    if(this.errorMsg[0]==false && this.errorMsg[1]==false && this.errorMsg[2]==false && this.errorMsg[3]==false)
      this.addXp(e,p,fi,fe);   
    
  }
  addXp(e:string,p:string,fi:string,fe:string){
    this.dataSvc.addData();
  }
  ngOnChange(){
    this.titulo=this.titles[this.modalId-10];
    this.label=this.labels[this.modalId-10];
  }

}
