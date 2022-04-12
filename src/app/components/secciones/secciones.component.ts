import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DatosService } from 'src/app/services/datos.service';
import { ClkEventsService } from 'src/app/services/clk-events.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {
  @Input() frameId:number;  
  visibleStyle:string="true";
  hiddenStyle:string="false";
  @Output() sec:any;
  @Output() seccion:string="";
  @Output() currStyle:string="";
  @Output() sOpen = new EventEmitter();


  constructor(private dbService:DatosService, private clkService:ClkEventsService) { }

  ngOnInit(): void {
    this.clkService.getBtnClk().subscribe(data =>{
      this.frameId=data.id;
      this.onFrameChange();
    })
  }

  onFrameChange(){
    this.currStyle=this.hiddenStyle;
    if(this.frameId!==5){
      this.sOpen.emit();
    }
    this.dbService.getData().subscribe(data => {
      switch(this.frameId)
      {
        case 0:{
          this.seccion="Experiencia";
          this.sec=data.experiencia;
          this.currStyle=this.visibleStyle;
          break;
        }
        case 1:{
          this.seccion="Educacion";
          this.sec=data.educacion;
          this.currStyle=this.visibleStyle;          
          break;
        }
        case 2:{
          this.seccion="Hard & Soft Skills";
          this.sec=data.habilidades;
          this.currStyle=this.visibleStyle;
          break;
        }
        case 3:{
          this.seccion="Proyectos";
          this.sec=data.proyectos;
          this.currStyle=this.visibleStyle;
          break;
        }
        default:{
          break;
        }
      }
    })
  }

}
