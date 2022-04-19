import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTrashCan, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  @Input() e:any;
  @Input() seccion:string="";
  @Input() visible:string="false";
  @Input() currStyle:any;
  @Input() edicion:boolean;
  seccionForm:FormGroup;
  faTrash=faTrashCan;
  faEdit=faEdit;
  disabled:boolean=true;
  constructor(private dataSvc:DatosService) { 
    this.seccionForm=new FormGroup({
      titulo:new FormControl('',[Validators.required]),
      subtitulo:new FormControl('',[Validators.required]),
      feIni:new FormControl('',[Validators.required]),
      feFin:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.seccionForm.get('titulo')?.setValue(this.e.titulo);
    this.seccionForm.get('subtitulo')?.setValue(this.e.subtitulo);
    this.seccionForm.get('feIni')?.setValue(this.e.fecha_0);
    this.seccionForm.get('feFin')?.setValue(this.e.fecha_1);
    this.seccionForm.disable();
  }
  enableEdit(){
    if(this.seccionForm.disabled){
      this.seccionForm.enable();
      this.faEdit=faCheck;
    }
    else{
      this.seccionForm.disable();
      this.dataSvc.editData(this.seccion,{
        id:this.e.id,
        labels:this.e.labels,
        titulo:this.seccionForm.get('titulo')?.value,
        subtitulo:this.seccionForm.get('subtitulo')?.value,
        fecha_0:this.seccionForm.get('feIni')?.value,
        fecha_1:this.seccionForm.get('feFin')?.value,
      });
      this.faEdit=faEdit;
    }    
  }
  remove(){
    this.dataSvc.removeData(this.seccion,this.e.id);
  }

}
