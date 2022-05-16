import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ApiSkService } from 'src/app/services/api-sk.service';
import { SkModel } from 'src/models/SkModel';

@Component({
  selector: 'app-modal-sk',
  templateUrl: './modal-sk.component.html',
  styleUrls: ['./modal-sk.component.css']
})
export class ModalSkComponent implements OnInit {
  @Input() visible:string;
  @Output() submit:EventEmitter<string> = new EventEmitter;
  error:boolean[];
  errorMsg:boolean;
  faPlus=faPlus;
  faTrash=faTrashCan;
  inputLNames:string[]=[];
  inputVNames:string[]=[];
  indice:number=1;
  skills:SkModel[];
  skillForm:FormGroup=new FormGroup({});

  constructor(private apiSvc:ApiSkService,private router:Router) { 
  }

  ngOnInit(): void {
    this.apiSvc.skill.subscribe(skData=>{
      this.skills=skData;
      this.loadInputs();
    })
 
  }
  ngAfterViewInit():void{
    this.apiSvc.getSkData();
  }

  removeControl(i:number){
    this.skillForm.removeControl("label"+i);
    this.skillForm.removeControl("value"+i);
    this.inputLNames.filter(function(value, index, arr){ 
      if(value==="label"+i)
        arr.splice(index,1);
    });
    this.inputVNames.filter(function(value, index, arr){ 
      if(value==="value"+i)
        arr.splice(index,1);
    });
    this.indice--;
    console.log(this.indice);
  }

  loadInputs(){
    for(let i = this.indice-1;i>=0;i--){
      this.skillForm.removeControl(this.inputVNames[i]);
      this.skillForm.removeControl(this.inputLNames[i]);
      this.inputLNames.pop();
      this.inputVNames.pop();
    }
    this.indice=0;
    for(let i = 0;i<this.skills.length;i++){
      this.inputLNames.push("label"+this.indice);
      this.inputVNames.push("value"+this.indice);
      this.skillForm.addControl(this.inputLNames[this.indice],new FormControl('',[Validators.required,Validators.minLength(3)]));
      this.skillForm.addControl(this.inputVNames[this.indice],new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]));
      this.skillForm.get(this.inputLNames[this.indice])?.setValue(this.skills[i].nombre);
      this.skillForm.get(this.inputVNames[this.indice])?.setValue(this.skills[i].valor);
      this.indice++; 
    }
  }

  setCanvas(){
    let sk:SkModel[]=[];
    for(let s of this.skills){
      this.apiSvc.rmSk(s.id);
    }
    for(let i = 0; i<this.indice;i++){
      sk.push({ id:1,
                nombre:this.skillForm.get(this.inputLNames[i])?.value,
                valor:this.skillForm.get(this.inputVNames[i])?.value
              })
    }
    this.apiSvc.saveAllSk(sk);    
    this.submit.emit("false"); 
    this.apiSvc.getSkData();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['skills']);
    });
  }

  addSeccion(){
    this.inputLNames.push("label"+this.indice);
    this.inputVNames.push("value"+this.indice);
    this.skillForm.addControl(this.inputLNames[this.indice],new FormControl('',Validators.minLength(3)));
    this.skillForm.addControl(this.inputVNames[this.indice],new FormControl('',[Validators.min(0),Validators.max(100)]));
    this.indice++;  
  }
}
