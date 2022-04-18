import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Output() clicked = new EventEmitter;
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
    this.clkService.setBtnClk(a);
  }
  profImgSelected(e:any){
    const file:File = e.target.files[0];
        if(file){
          this.profFile = file.name;
        }
  }
}
