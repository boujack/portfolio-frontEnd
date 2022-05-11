import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {
  private seccArray:string[]=["Experiencia","Educacion","Hard & Soft Skills","Proyectos"];
  @Input() frameId:number;
  @Output() sec:any;
  @Output() seccion:string="";
  @Output() currStyle:string="";
  @Output() sOpen = new EventEmitter();
  faPlus=faPlus;
  faEdit=faEdit;
  @Output() edicion:boolean=false;
  isSkill:boolean=false;


  constructor(private dbService:DatosService, private clkService:ClkEventsService) { }

  ngOnInit(): void {
    this.clkService.getBtnClk().subscribe(data =>{
      if(data>=0 && data<10)
      {
        this.frameId=data;
        this.onFrameChange();
      }
    })
    this.clkService.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
  }

  onFrameChange(){
    this.currStyle="false";
    this.sOpen.emit();
    this.seccion=this.seccArray[this.frameId];
    this.currStyle="true";
    this.typeSeccion();
    this.isSkill=false;
    if(this.frameId==2)
      this.isSkill=true;
    //this.sec=this.dbService.getValues(this.frameId);
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
  addSeccion(){
    this.clkService.setBtnClk(this.frameId+10);
  }
  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
