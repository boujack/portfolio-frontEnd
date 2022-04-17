import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Output() submit:EventEmitter<string>=new EventEmitter;
  @Input() modalId:number;
  genForm:FormGroup;
  constructor(private dataSvc:DatosService) { 
    this.genForm=new FormGroup({
      title:new FormControl('',Validators.required),
      subtitle:new FormControl('',Validators.required),
      feIni:new FormControl('',Validators.required),
      feFin:new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    this.titulo=this.titles[this.modalId-10];
    this.label=this.labels[this.modalId-10];
  }
  validacion(){
    this.addXp(this.genForm.get("title")?.value,this.genForm.get("subtitle")?.value,this.genForm.get("feIni")?.value,this.genForm.get("feFin")?.value);       
  }
  addXp(e:string,p:string,fi:string,fe:string){
    this.dataSvc.addData();
    this.submit.emit("false");
  }
  ngOnChange(){
    this.titulo=this.titles[this.modalId-10];
    this.label=this.labels[this.modalId-10];
  }

}
