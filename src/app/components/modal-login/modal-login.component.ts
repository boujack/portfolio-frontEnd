import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators , FormControl} from '@angular/forms';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { DatosService } from 'src/app/services/datos.service';

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
  constructor(private dataSvc:DatosService,private clkSvc:ClkEventsService) { }

  ngOnInit(): void {
  }
  tryLogin(){
    this.dataSvc.getData().subscribe(data=>{
      let success:boolean=false;
      for(let user of data.users){
        if(user.user===this.loginForm.get("username")?.value && user.pass===this.loginForm.get("password")?.value){
          success=true;
          this.authError=false;
          this.clkSvc.setBtnClk({id:25,name:"loginSuccess",pressed:true});
          this.clkSvc.setEdit(true);
          this.submit.emit("false");
        }
      }
      if(!success)
        this.authError=true;
    })
  }

}
