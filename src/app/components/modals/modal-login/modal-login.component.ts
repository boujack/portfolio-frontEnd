import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators , FormControl} from '@angular/forms';
import { ApiUserService } from 'src/app/services/api-user.service';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  @Input() value:string;
  @Output() submit:EventEmitter<string> = new EventEmitter;
  authError:boolean=false;
  

  loginForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required, Validators.minLength(3)]),
    password:new FormControl('',[Validators.required, Validators.minLength(3)])
  })
  constructor(private dataSvc:ApiUserService,private clkSvc:ClkEventsService) { }

  ngOnInit(): void {
    this.clkSvc.setEdit(false);
  }
  tryLogin(){
      let success:boolean=false;
      let hashed:string = CryptoJS.SHA256(this.loginForm.get("password")?.value).toString();
      this.dataSvc.getUser().then((u)=>{
        if(u.username===this.loginForm.get("username")?.value && u.password===hashed){
          this.loginForm.get("username")?.setValue("");
          this.loginForm.get("username")?.markAsUntouched();
          this.loginForm.get("password")?.setValue("");
          this.loginForm.get("password")?.markAsUntouched();
          success=true;
          this.authError=false;
          this.clkSvc.setBtnClk(25);
          this.clkSvc.setEdit(true);
          this.submit.emit("false");
        }   
      if(!success)
        this.authError=true;
      })  
  }

}
