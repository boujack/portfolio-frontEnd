import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

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
  @Output() edicion:boolean=true;


  constructor(private dbService:DatosService, private clkService:ClkEventsService) { }

  ngOnInit(): void {
    this.clkService.getBtnClk().subscribe(data =>{
      if(data.id>=0 && data.id<10)
      {
        this.frameId=data.id;
        this.onFrameChange();
      }
    })
  }

  onFrameChange(){
    this.currStyle="false";
    this.sOpen.emit();
    this.dbService.getData().subscribe(data => {
      this.seccion=this.seccArray[this.frameId];
      this.currStyle="true";
      switch(this.frameId)
      {
        case 0:{
          this.sec=data.experiencia;          
          break;
        }
        case 1:{
          this.sec=data.educacion;     
          break;
        }
        case 2:{
          this.sec=data.habilidades;
          break;
        }
        case 3:{
          this.sec=data.proyectos;
          break;
        }
        default:{
          this.currStyle="false";
          break;
        }
      }
    })
  }
  addSeccion(){
    this.clkService.setBtnClk({id:this.frameId+10,name:"addSec",pressed:true});
  }

}
