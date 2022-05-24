import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FireCloudService } from 'src/app/services/fire-cloud.service';
import { ApiUserService } from 'src/app/services/api-user.service';

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
  profFile:string

  constructor(private clkService:ClkEventsService,private fireCloudSvc:FireCloudService,private apiSvc:ApiUserService) {
  }

  ngOnInit(): void {
    this.clkService.getUIStatus().subscribe(data=>{
      if(data)
        this.animate="true";
    })
    this.clkService.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
    this.apiSvc.getUser().then((u)=>{
      this.profFile=u.urlPerfil;
    })
    this.apiSvc.userSubj.subscribe((u)=>{
      if(u.urlPerfil!=this.profFile)
        this.profFile=u.urlPerfil;
    })
  }
  
  runeClick(a:number){
    this.clkService.setBtnClk(a);
  }
  async profImgSelected(e:any){
    const file:File = e.target.files[0];
    await this.fireCloudSvc.uploadImg(file,"profile");
  }
}
