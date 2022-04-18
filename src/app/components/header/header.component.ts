import { Component, OnInit, Output } from '@angular/core';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { ClkEventsService } from 'src/app/services/clk-events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() visible:string="false";
  apagado:string="filter:brightness(50%) grayscale(100%);";
  faTerminal=faTerminal;
  constructor(private clkSvc:ClkEventsService) { }

  ngOnInit(): void {
    this.clkSvc.getUIStatus().subscribe(data => {
      if(data)
        this.apagado="";
    })
  }
  toggleMenu(e:any){
    if(e)
      this.visible="true";
    else
      this.visible="false";
  }

}
