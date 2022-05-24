import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiEdService } from 'src/app/services/api-ed.service';
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
  niveles:String[]=["Primario","Primario Incompleto","Secundario","Secundario Incompleto","Terciario","Terciario Incompleto","Universitario","Univeristario Incompleto","Otro"];

  constructor(private apiSvc:ApiEdService,private router:Router) { 
    this.genForm=new FormGroup({
      instituto:new FormControl('',Validators.required),
      titulo:new FormControl(''),
      nivel:new FormControl('',Validators.required),
      ingreso:new FormControl('',Validators.required),
      egreso:new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  async addEd(){
    let ed:EduModel = new EduModel;
    ed.id=1;
    ed.instituto=this.genForm.get('instituto')?.value;
    ed.titulo=this.genForm.get('titulo')?.value;
    ed.nivel=this.genForm.get('nivel')?.value;
    ed.ingreso=this.genForm.get('ingreso')?.value;
    if(this.genForm.get('egreso')?.value)
      ed.egreso=this.genForm.get('egreso')?.value;
    else
      ed.egreso="";
    await this.apiSvc.saveEdu(ed);
    this.submit.emit("false");
    await this.apiSvc.getEduData();   
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['educacion']);
    });
  }

  ngOnChange(){
  }


}