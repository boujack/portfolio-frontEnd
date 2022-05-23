import { Component, OnInit, HostListener } from '@angular/core';
import { faCircleNodes,faEdit } from '@fortawesome/free-solid-svg-icons';
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
  faNode=faCircleNodes;
  edicion:boolean;

  constructor(private datosSvc:DatosService,private clkSvc:ClkEventsService) { }

  ngOnInit(): void {
    this.d.subscribe(async data =>{      
      this.typeDescription();
    });
    this.clkSvc.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
    this.datosSvc.getDescChange().subscribe(d=>{
      this.newDesc=this.datosSvc.getUsers().nombre + "·" +this.datosSvc.getUsers().apellido+ "-> " + d;
      this.d.next(d);
    })
  }
  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key=='Enter'){
       if(this.newDesc!=this.datosSvc.getDesc()){
        this.newDesc=this.datosSvc.getUsers().nombre + "·" +this.datosSvc.getUsers().apellido+ "-> " + this.datosSvc.getDesc();
        this.d.next(this.datosSvc.getDesc());
        this.animate="true"
      }
      this.clkSvc.enableUI(); 
    }    
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

  editButton(){
    this.clkSvc.setBtnClk(16);
  }
}
