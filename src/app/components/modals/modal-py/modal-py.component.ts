import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiPyService } from 'src/app/services/api-py.service';
import { FireCloudService } from 'src/app/services/fire-cloud.service';
import { PyModel } from 'src/models/PyModel';

@Component({
  selector: 'app-modal-py',
  templateUrl: './modal-py.component.html',
  styleUrls: ['./modal-py.component.css']
})
export class ModalPyComponent implements OnInit {

  
  @Input() visible:string;
  @Output() submit:EventEmitter<string>=new EventEmitter;
  genForm:FormGroup;

  constructor(private apiSvc:ApiPyService, private router:Router,private fireCloudSvc:FireCloudService) { 
    this.genForm=new FormGroup({
      nombre:new FormControl('',Validators.required),
      descripcion:new FormControl('',Validators.required),
      inicio:new FormControl('',Validators.required),
      fin:new FormControl(''),
      logo:new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  async addPy(){
    let py:PyModel = new PyModel;
    py.id=1;
    py.nombre=this.genForm.get('nombre')?.value;
    py.descripcion=this.genForm.get('descripcion')?.value;
    py.inicio=this.genForm.get('inicio')?.value;
    py.fin=this.genForm.get('fin')?.value;
    py.logo=this.genForm.get('logo')?.value;
    await this.apiSvc.savePy(py);
    this.submit.emit("false"); 
    await this.apiSvc.getPyData();  
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['proyectos']);
    });
    this.genForm.reset();
  }

  async uploadLogo(e:any){
    const file:File = e.target.files[0];
    this.fireCloudSvc.uploadImg(file,"logo")
    .then((url)=>{
      this.genForm.get('logo')?.setValue(url);
    });
  }
}
