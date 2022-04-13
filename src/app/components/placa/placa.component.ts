import { Component, OnInit, HostListener } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { DatosService } from 'src/app/services/datos.service';
@Component({
  selector: 'app-placa',
  templateUrl: './placa.component.html',
  styleUrls: ['./placa.component.css']
})
export class PlacaComponent implements OnInit {
  key:any;
  animate:string="false";
  description:string="Press Enter to Start"
  d:Subject<string>=new Subject;
  newDesc:string;
  faEdit=faEdit;
  edicion:boolean;

  constructor(private datosSvc:DatosService,private clkSvc:ClkEventsService) { }

  ngOnInit(): void {
    this.d.subscribe(async data =>{      
      this.typeDescription();
    });
    this.clkSvc.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
  }
  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.datosSvc.getData().subscribe(data=>{
      if(this.newDesc!=data.descripcion){
        this.newDesc=data.descripcion;
        this.d.next(data.descripcion);
        this.animate="true"
      }
      this.clkSvc.enableUI();     
    })   
  }

  async typeDescription(){
    this.description="";
      for(let i=0;i<this.newDesc.length;i++ )
      {
        this.description=this.description+this.newDesc.charAt(i);
        if(this.newDesc.charAt(i)!=' ')
          await this.delay(100);
      }
      this.animate="false";
  }
  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
