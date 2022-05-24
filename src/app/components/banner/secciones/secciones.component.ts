import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ClkEventsService } from 'src/app/services/clk-events.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {
  @Output() sOpen = new EventEmitter();
  @Output() edicion:boolean=false;
  routeEnabled:boolean=false;

  constructor(private clkService:ClkEventsService) { }

  ngOnInit(): void {
    this.clkService.getBtnClk().subscribe(data =>{
      if(data>=0 && data<10)
      {
        this.sOpen.emit();
        this.routeEnabled=true;
      }
    })
  }
}
