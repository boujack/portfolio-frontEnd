import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { Boton } from 'src/app/services/clk-events.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Output() clicked = new EventEmitter;
  private xpBtn:Boton={id:0,name:"xp",pressed:false};
  private edBtn:Boton={id:1,name:"ed",pressed:false};
  private skBtn:Boton={id:2,name:"sk",pressed:false};
  private pyBtn:Boton={id:3,name:"py",pressed:false};
  private imgBtn:Boton={id:4,name:"img",pressed:false};
  animate:string="false";
  edicion:boolean=false;
  faEdit=faEdit;
  profFile:string="profile.png"

  constructor(private clkService:ClkEventsService) {
  }

  ngOnInit(): void {
    this.clkService.getUIStatus().subscribe(data=>{
      if(data)
        this.animate="true";
    })
    this.clkService.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
  }
  
  runeClick(a:number){
    switch(a){
      case 0:{
        this.xpBtn.pressed=true;
        this.clkService.setBtnClk(this.xpBtn);
        break;
      }
      case 1:{
        this.edBtn.pressed=true;
        this.clkService.setBtnClk(this.edBtn);
        break;
      }
      case 2:{
        this.skBtn.pressed=true;
        this.clkService.setBtnClk(this.skBtn);
        break;
      }
      case 3:{
        this.pyBtn.pressed=true;
        this.clkService.setBtnClk(this.pyBtn);
        break;
      }
      case 4:{
        this.imgBtn.pressed=true;
        this.clkService.setBtnClk(this.imgBtn);
        break;
      }
      default:{
        break;
      }
    }
  }
  profImgSelected(e:any){
    const file:File = e.target.files[0];
        if(file){
          this.profFile = file.name;
        }
  }
}
