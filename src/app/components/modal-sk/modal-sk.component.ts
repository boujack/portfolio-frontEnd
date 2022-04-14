import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-modal-sk',
  templateUrl: './modal-sk.component.html',
  styleUrls: ['./modal-sk.component.css']
})
export class ModalSkComponent implements OnInit {
  @Input() visible:string;
  @Output() submit:EventEmitter<string> = new EventEmitter;
  labels:string[]=["Hab_0","Hab_1","Hab_2","Hab_3","Hab_4","Hab_5"];
  error:boolean[]=[false,false,false,false,false,false];
  errorMsg:boolean;
  constructor(private dataSvc:DatosService) { }

  ngOnInit(): void {

  }
  validation(sk:number[]){
    this.errorMsg=false;
    for(let i=0;i<sk.length;i++){
      if(sk[i]<0||sk[i]>100){
        this.error[i]=true;
        this.errorMsg=true;
      }
    }
    if(!this.errorMsg)
      this.setCanvas(sk);
  }
  setCanvas(sk:number[]){
    this.dataSvc.editData(sk)
  }

}
