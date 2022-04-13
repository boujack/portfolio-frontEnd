import { Component, OnInit} from '@angular/core';
import { ClkEventsService } from 'src/app/services/clk-events.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  logged:boolean=false;
  loginText:string="Login";
  constructor(private clkSvc:ClkEventsService) {
  }

  ngOnInit(): void {
    this.clkSvc.getBtnClk().subscribe(data=>{
      if(data.id==25){
        this.loginText="Logout"
        this.logged=true;
      }
      if(data.id==45){
        this.loginText="Login"
        this.logged=false;
      }
    })
  }
  onClick(){
    if(!this.logged)
      this.clkSvc.setBtnClk({id:15,name:"logModal",pressed:true});
    else
      this.clkSvc.setBtnClk({id:45,name:"logout",pressed:true});     
  }

}
