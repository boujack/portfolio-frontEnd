import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { EduModel } from 'src/models/EduModel';

@Component({
  selector: 'app-modal-ed',
  templateUrl: './modal-ed.component.html',
  styleUrls: ['./modal-ed.component.css']
})
export class ModalEdComponent implements OnInit {

  @Input() visible:string;
  @Output() submit:EventEmitter<string>=new EventEmitter;
  genForm:FormGroup;
  niveles:String[]=["Secundario","Secundario Incompleto","Terciario","Terciario Incompleto","Universitario","Univeristario Incompleto","Otro"];

  constructor(private apiSvc:ApiService) { 
    this.genForm=new FormGroup({
      instituto:new FormControl('',Validators.required),
      titulo:new FormControl('',Validators.required),
      nivel:new FormControl('',Validators.required),
      ingreso:new FormControl('',Validators.required),
      egreso:new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  addEd(){
    let ed:EduModel = new EduModel;
    ed.id=1;
    ed.instituto=this.genForm.get('instituto')?.value;
    ed.titulo=this.genForm.get('titulo')?.value;
    ed.nivel=this.genForm.get('nivel')?.value;
    ed.ingreso=this.genForm.get('ingreso')?.value;
    ed.egreso=this.genForm.get('egreso')?.value;
    this.apiSvc.saveEdu(ed);
    this.submit.emit("false");
    this.apiSvc.getEduData();     
  }

  ngOnChange(){
  }


}
