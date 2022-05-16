import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private apiSvc:ApiSkService) { 
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
    this.apiSvc.rmSk(this.skills[i].id);
    //add api delete
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
    this.apiSvc.getSkData();    
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
    for(let i = this.skills.length; i<this.indice;i++){
      sk.push({ id:1,
                nombre:this.skillForm.get(this.inputLNames[i])?.value,
                valor:this.skillForm.get(this.inputVNames[i])?.value
              })
    }
    this.apiSvc.saveAllSk(sk);    
    this.submit.emit("false"); 
  }

  addSeccion(){
    this.inputLNames.push("label"+this.indice);
    this.inputVNames.push("value"+this.indice);
    this.skillForm.addControl(this.inputLNames[this.indice],new FormControl('',Validators.minLength(3)));
    this.skillForm.addControl(this.inputVNames[this.indice],new FormControl('',[Validators.min(0),Validators.max(100)]));
    this.indice++;  
  }
}
