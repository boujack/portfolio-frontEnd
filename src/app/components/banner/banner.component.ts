import { Component, OnInit, Output } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ClkEventsService } from 'src/app/services/clk-events.service';

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
  bgFile:string="circuit_banner_3.png";

  constructor(private clkSvc:ClkEventsService) { }

  ngOnInit(): void {
    this.clkSvc.getUIStatus().subscribe(data => {
      if(data)
        this.animate="true";
    })
    this.clkSvc.getEditStatus().subscribe(status=>{
      this.edicion=status;
    })
  }
  sectOpen(){
    this.columnas="duo-column";
  }
  bgImgSelected(e:any){
    const file:File = e.target.files[0];
        if(file){
          this.bgFile = file.name;
        }
  }
}
