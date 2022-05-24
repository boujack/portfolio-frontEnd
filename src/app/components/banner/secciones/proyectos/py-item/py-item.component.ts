import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTrashCan, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ApiPyService } from 'src/app/services/api-py.service';

@Component({
  selector: 'app-py-item',
  templateUrl: './py-item.component.html',
  styleUrls: ['./py-item.component.css']
})
export class PyItemComponent implements OnInit {

  @Input() e:any;
  @Input() visible:string="false";
  @Input() currStyle:any;
  @Input() edicion:boolean;
  logo:string="";
  seccionForm:FormGroup;
  faTrash=faTrashCan;
  faEdit=faEdit;
  disabled:boolean=true;
  constructor(private apiSvc:ApiPyService,private router:Router) { 
    this.seccionForm=new FormGroup({
      nombre:new FormControl('',[Validators.required]),
      descripcion:new FormControl('',[Validators.required]),
      inicio:new FormControl('',[Validators.required]),
      fin:new FormControl('')
    })
  }

  ngOnInit(): void {
    this.seccionForm.get('nombre')?.setValue(this.e.nombre);
    this.seccionForm.get('descripcion')?.setValue(this.e.descripcion);
    this.seccionForm.get('inicio')?.setValue(this.e.inicio);
    this.seccionForm.get('fin')?.setValue(this.e.fin);
    this.logo=this.e.logo;
    this.seccionForm.disable();
  }

  enableEdit(){
    if(this.seccionForm.disabled){
      this.seccionForm.enable();
      this.faEdit=faCheck;
    }
    else{
      this.seccionForm.disable();
      this.faEdit=faEdit;
      this.e.nombre=this.seccionForm.get('nombre')?.value;
      this.e.descripcion=this.seccionForm.get('descripcion')?.value;
      this.e.inicio=this.seccionForm.get('inicio')?.value;
      this.e.fin=this.seccionForm.get('fin')?.value;
      this.apiSvc.savePy(this.e);
    }    
  }

  async remove(){
    await this.apiSvc.rmPy(this.e.id);
    await this.apiSvc.getPyData();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['proyectos']);
    });
  }
}
