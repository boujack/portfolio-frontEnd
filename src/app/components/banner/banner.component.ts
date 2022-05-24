import { Component, OnInit, Output } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ApiUserService } from 'src/app/services/api-user.service';
import { ClkEventsService } from 'src/app/services/clk-events.service';
import { FireCloudService } from 'src/app/services/fire-cloud.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Output() thisStyle:any;
  columnas:any="single-column";
  animate:string="false";
  faEdit=faEdit;
  edicion:boolean=false;
  bgUrl:string;

  constructor(private clkSvc:ClkEventsService,private fireCloudSvc:FireCloudService,private apiSvc:ApiUserService) { }

  ngOnInit(): void {
    this.clkSvc.getUIStatus().subscribe(data => {
      if(data)
        this.animate="true";
    })
    this.clkSvc.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
    this.apiSvc.getReq().then((u)=>{
      this.bgUrl=u.urlBanner
    })
  }
  sectOpen(){
    this.columnas="duo-column";
  }
  bgImgSelected(e:any){
    const file:File = e.target.files[0];
    this.fireCloudSvc.uploadImg(file,"banner");
    this.apiSvc.getReq().then((u)=>{
      this.bgUrl=u.urlBanner
    })
  }
}
