import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { DatosService } from 'src/app/services/datos.service';

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
  indice:number=0;

  skillForm:FormGroup=new FormGroup({});

  constructor(private dataSvc:DatosService) { 
  }

  ngOnInit(): void {
    this.loadInputs(this.dataSvc.getSkL(),this.dataSvc.getSkValues());
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
  }

  loadInputs(l:string[],v:number[]){
    for(let i = this.indice-1;i>=0;i--){
      this.skillForm.removeControl(this.inputVNames[i]);
      this.skillForm.removeControl(this.inputLNames[i]);
      this.inputLNames.pop();
      this.inputVNames.pop();
    }
    this.indice=0;
    for(let i = 0;i<l.length;i++){
      this.inputLNames.push("label"+this.indice);
      this.inputVNames.push("value"+this.indice);
      this.skillForm.addControl(this.inputLNames[this.indice],new FormControl('',Validators.minLength(3),));
      this.skillForm.addControl(this.inputVNames[this.indice],new FormControl('',[Validators.min(0),Validators.max(100)]));
      this.skillForm.get(this.inputLNames[this.indice])?.setValue(l[i]);
      this.skillForm.get(this.inputVNames[this.indice])?.setValue(v[i]);
      this.indice++; 
    }
  }

  setCanvas(){
    let values:number[]=[];
    let labels:string[]=[];
    for(let i = 0; i<this.indice;i++){
      labels.push(this.skillForm.get(this.inputLNames[i])?.value);
      values.push(this.skillForm.get(this.inputVNames[i])?.value);
    }
    this.dataSvc.editSkValues(values);
    this.dataSvc.editSkL(labels);
    this.dataSvc.editSkLables(labels);
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
