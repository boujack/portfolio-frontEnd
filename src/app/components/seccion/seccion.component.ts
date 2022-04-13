import { Component, OnInit, Input } from '@angular/core';
import { faTrashCan, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  @Input() e:any;
  @Input() seccion:string="";
  @Input() visible:string="false";
  @Input() currStyle:any;
  @Input() edicion:boolean;
  faTrash=faTrashCan;
  faEdit=faEdit;
  disabled:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  enableEdit(){
    if(this.disabled){
      this.disabled=false;
      this.faEdit=faCheck;
    }
    else{
      this.disabled=true;
      this.faEdit=faEdit;
    }    
  }
  remove(){
    console.log("remove");
  }

}
