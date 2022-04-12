import { Component, OnInit, Output } from '@angular/core';
import { ClkEventsService } from 'src/app/services/clk-events.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  @Output() logVis:string="false";
  @Output() xpVis:string="false";
  @Output() edVis:string="false";
  @Output() skVis:string="false";
  @Output() pyVis:string="false";
  @Output() descVis:string="false";
  constructor(private clkSvc:ClkEventsService) { }

  ngOnInit(): void {
    this.clkSvc.getBtnClk().subscribe(data=>{
      switch(data.name){
        case "logModal":{
          this.logVis="true"
          break;
        }
        case "xpModal":{
          this.xpVis="true"
          break;
        }
        case "edModal":{
          this.edVis="true"
          break;
        }
        case "skModal":{
          this.skVis="true"
          break;
        }
        case "pyModal":{
          this.pyVis="true"
          break;
        }
        case "descModal":{
          this.descVis="true"
          break;
        }
      }
    })
  }

}
