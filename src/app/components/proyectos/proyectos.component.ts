import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import { ApiPyService } from 'src/app/services/api-py.service';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { PyModel } from 'src/models/PyModel';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Output() sec:PyModel[];
  @Output() seccion:string="Proyectos";
  @Output() currStyle:string="";
  @Output() sOpen = new EventEmitter();
  faPlus=faPlus;
  faEdit=faEdit;
  @Input() edicion:boolean=false;
  secLenght:number=0;

  constructor(private apiSvc:ApiPyService, private clkService:ClkEventsService) {     
  }

  ngOnInit(): void {
    this.apiSvc.project.subscribe(pyData=>{
      this.sec=pyData;
      console.log(this.sec);
    })
    this.clkService.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
    this.edicion=this.clkService.getEdit();
  }

  ngAfterViewInit():void{
    this.apiSvc.getPyData();
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
    this.clkService.setBtnClk(13);
  }

}
