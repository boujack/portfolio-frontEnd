import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiXpService } from 'src/app/services/api-xp.service';
import { FireCloudService } from 'src/app/services/fire-cloud.service';
import { XpModel } from 'src/models/XpModel';

@Component({
  selector: 'app-modal-xp',
  templateUrl: './modal-xp.component.html',
  styleUrls: ['./modal-xp.component.css']
})
export class ModalXpComponent implements OnInit {

  @Input() visible:string;
  @Output() submit:EventEmitter<string>=new EventEmitter;
  genForm:FormGroup;
  tipos:String[]=["Full-Time","Part-Time","Pasantia","Freelance","Otro"];

  constructor(private apiSvc:ApiXpService,private router:Router,private fireCloudSvc:FireCloudService) { 
    this.genForm=new FormGroup({
      empresa:new FormControl('',Validators.required),
      puesto:new FormControl('',Validators.required),
      tipo:new FormControl('',Validators.required),
      ingreso:new FormControl('',Validators.required),
      egreso:new FormControl(''),
      logo:new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  async addXp(){
    let xp:XpModel = new XpModel;
    xp.id=1;
    xp.empresa=this.genForm.get('empresa')?.value;
    xp.puesto=this.genForm.get('puesto')?.value;
    xp.tipo=this.genForm.get('tipo')?.value;
    xp.ingreso=this.genForm.get('ingreso')?.value;
    xp.egreso=this.genForm.get('egreso')?.value;
    xp.logo=this.genForm.get('logo')?.value;
    await this.apiSvc.saveExp(xp);
    this.submit.emit("false"); 
    await this.apiSvc.getExpData();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['experiencia']);
    })
    this.genForm.reset()    
  }

  async uploadLogo(e:any){
    const file:File = e.target.files[0];
    this.fireCloudSvc.uploadImg(file,"logo")
    .then((url)=>{
      this.genForm.get('logo')?.setValue(url);
    });
  }


}
