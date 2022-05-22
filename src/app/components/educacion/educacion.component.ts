import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { EduModel } from 'src/models/EduModel';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Output() sec:EduModel[];
  @Output() seccion:string="Educacion";
  @Output() currStyle:string="";
  @Output() sOpen = new EventEmitter();
  faPlus=faPlus;
  faEdit=faEdit;
  @Output() edicion:boolean=false;

  constructor(private apiSvc:ApiService, private clkService:ClkEventsService) { 
    
    
  }

  ngOnInit(): void {
    this.apiSvc.educacion.subscribe(edData=>{
      this.sec=edData;
    })
    this.clkService.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
    this.edicion=this.clkService.getEdit();
  }
  
  ngAfterViewInit():void{
    this.apiSvc.getEduData();
    this.typeSeccion();
  }
  
  async typeSeccion(){
    let aux:string=this.seccion;
    this.seccion="";
    for(let i=0;i<aux.length;i++)
    {
      await this.delay(100);
      this.seccion=this.seccion+aux.charAt(i);      
    }
  }
  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  addSeccion(){
    this.clkService.setBtnClk(11);
  }
  enableEdit(){ 
  }
  remove(){
  }
}
