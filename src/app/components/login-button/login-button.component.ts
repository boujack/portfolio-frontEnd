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
    this.clkSvc.getEditStatus().subscribe(status=>{
      if(status){
        this.loginText="Logout"
        this.logged=true;
      }
      else{
        this.loginText="Login"
        this.logged=false;
      }
    })
  }
  onClick(){
    if(!this.logged)
      this.clkSvc.setBtnClk(15);
    else
      this.clkSvc.setEdit(false);    
  }

}
