import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import { ApiXpService } from 'src/app/services/api-xp.service';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { XpModel } from 'src/models/XpModel';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Output() sec:XpModel[];
  @Output() seccion:string="Experiencia";
  @Output() currStyle:string="";
  @Output() sOpen = new EventEmitter();
  faPlus=faPlus;
  faEdit=faEdit;
  @Output() edicion:boolean=false;

  constructor(private apiSvc:ApiXpService, private clkService:ClkEventsService) {     
  }

  ngOnInit(): void {
    this.apiSvc.experiencia.subscribe(xpData=>{
      this.sec=xpData;
    })
    this.clkService.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
    this.edicion=this.clkService.getEdit();
  }

  ngAfterViewInit(){
    this.apiSvc.getExpData();
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
    this.clkService.setBtnClk(10);
  }

}
