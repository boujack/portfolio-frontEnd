import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import { ApiSkService } from 'src/app/services/api-sk.service';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { SkModel } from 'src/models/SkModel';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @ViewChild('appCanvas') canvas:CanvasComponent;

  @Output() sec:SkModel[];
  @Output() seccion:string="Hard & Soft Skills";
  @Output() currStyle:string="";
  @Output() sOpen = new EventEmitter();
  enabled:boolean;
  faPlus=faPlus;
  faEdit=faEdit;
  @Output() edicion:boolean=false;

  constructor(private apiSvc:ApiSkService, private clkService:ClkEventsService) {     
  }

  ngOnInit(): void {
    this.apiSvc.skill.subscribe(skData=>{
      this.sec=skData;
      this.canvas.drawCanvas()
    })
    this.clkService.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
    this.edicion=this.clkService.getEdit();
  }

  ngAfterViewInit():void{
    this.apiSvc.getSkData();
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
    this.clkService.setBtnClk(12);
  }

}
