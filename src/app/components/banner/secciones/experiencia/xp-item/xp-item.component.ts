import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTrashCan, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ApiXpService } from 'src/app/services/api-xp.service';


@Component({
  selector: 'app-xp-item',
  templateUrl: './xp-item.component.html',
  styleUrls: ['./xp-item.component.css']
})

export class XpItemComponent implements OnInit {

  @Input() e:any;
  @Input() visible:string="false";
  @Input() currStyle:any;
  @Input() edicion:boolean;
  tipos:String[]=["Full-Time","Part-Time","Pasantia","Freelance","Otro"];
  logo:string="";
  seccionForm:FormGroup;
  faTrash=faTrashCan;
  faEdit=faEdit;
  disabled:boolean=true;
  constructor(private apiSvc:ApiXpService,private router:Router) { 
    this.seccionForm=new FormGroup({
      empresa:new FormControl('',[Validators.required]),
      puesto:new FormControl('',[Validators.required]),
      tipo:new FormControl('',[Validators.required]),
      ingreso:new FormControl('',[Validators.required]),
      egreso:new FormControl('')
    })
  }

  ngOnInit(): void {
    this.seccionForm.get('empresa')?.setValue(this.e.empresa);
    this.seccionForm.get('puesto')?.setValue(this.e.puesto);
    this.seccionForm.get('tipo')?.setValue(this.e.tipo);
    this.seccionForm.get('ingreso')?.setValue(this.e.ingreso);
    this.seccionForm.get('egreso')?.setValue(this.e.egreso);
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
      this.e.empresa=this.seccionForm.get('empresa')?.value;
      this.e.puesto=this.seccionForm.get('puesto')?.value;
      this.e.tipo=this.seccionForm.get('tipo')?.value;
      this.e.ingreso=this.seccionForm.get('ingreso')?.value;
      this.e.egreso=this.seccionForm.get('egreso')?.value;
      this.apiSvc.saveExp(this.e);
    }    
  }

  async remove(){
    await this.apiSvc.rmExp(this.e.id);
    await this.apiSvc.getExpData();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['experiencia']);
    });
  }
}
