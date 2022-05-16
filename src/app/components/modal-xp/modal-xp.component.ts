import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiXpService } from 'src/app/services/api-xp.service';
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

  constructor(private apiSvc:ApiXpService,private router:Router) { 
    this.genForm=new FormGroup({
      empresa:new FormControl('',Validators.required),
      puesto:new FormControl('',Validators.required),
      tipo:new FormControl('',Validators.required),
      ingreso:new FormControl('',Validators.required),
      egreso:new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  addXp(){
    let xp:XpModel = new XpModel;
    xp.id=1;
    xp.empresa=this.genForm.get('empresa')?.value;
    xp.puesto=this.genForm.get('puesto')?.value;
    xp.tipo=this.genForm.get('tipo')?.value;
    xp.ingreso=this.genForm.get('ingreso')?.value;
    xp.egreso=this.genForm.get('egreso')?.value;
    this.apiSvc.saveExp(xp);
    this.submit.emit("false"); 
    this.apiSvc.getExpData();
    this.router.navigateByUrl("/experiencia").then();      
  }

  ngOnChange(){
  }


}
