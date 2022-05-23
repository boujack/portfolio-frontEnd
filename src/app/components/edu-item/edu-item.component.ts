import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTrashCan, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent implements OnInit {
  @Input() e:any;
  @Input() visible:string="false";
  @Input() currStyle:any;
  @Input() edicion:boolean;
  logo:string="";
  seccionForm:FormGroup;
  faTrash=faTrashCan;
  faEdit=faEdit;
  disabled:boolean=true;
  constructor(private apiSvc:ApiService,private router:Router) { 
    this.seccionForm=new FormGroup({
      instituto:new FormControl('',[Validators.required]),
      titulo:new FormControl(''),
      nivel:new FormControl('',[Validators.required]),
      feIni:new FormControl('',[Validators.required]),
      feFin:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.seccionForm.get('instituto')?.setValue(this.e.instituto);
    this.seccionForm.get('titulo')?.setValue(this.e.titulo);
    this.seccionForm.get('nivel')?.setValue(this.e.nivel);
    this.seccionForm.get('feIni')?.setValue(this.e.ingreso);
    this.seccionForm.get('feFin')?.setValue(this.e.egreso);
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
      this.e.instituto=this.seccionForm.get('instituto')?.value;
      this.e.titulo=this.seccionForm.get('titulo')?.value;
      this.e.nivel=this.seccionForm.get('nivel')?.value;
      this.e.ingreso=this.seccionForm.get('feIni')?.value;
      this.e.egreso=this.seccionForm.get('feFin')?.value;
      this.apiSvc.saveEdu(this.e);
    }    
  }
  remove(){
    this.apiSvc.rmEdu(this.e.id);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['educacion']);
    });
  }

}
