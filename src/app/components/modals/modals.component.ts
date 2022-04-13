import { Component, OnInit, Output} from '@angular/core';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  visible:string="false"
  @Output() modalId:number=0;
  faXmark=faXmark;
  constructor(private clkSvc:ClkEventsService) { }

  ngOnInit(): void {
    this.clkSvc.getBtnClk().subscribe(data=>{
      if(data.id>=10 && data.id<20){
        this.visible="true";
        this.modalId=data.id;
      }
    })
  }
  modalClose(){
    this.visible="false";
    this.modalId=0;
  }
}
