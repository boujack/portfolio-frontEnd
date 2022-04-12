import { Component, OnInit} from '@angular/core';
import { ClkEventsService } from 'src/app/services/clk-events.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  logged:boolean=false;
  constructor(private clkSvc:ClkEventsService) {
  }

  ngOnInit(): void {
  }
  onClick(){
    console.log("login-button");
    this.clkSvc.setBtnClk({id:15,name:"logModal",pressed:true});    
  }

}
