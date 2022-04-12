import { Component, OnInit, Input } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  @Input() sec:any;
  @Input() seccion:string="";
  @Input() visible:string="false";
  @Input() currStyle:any;
  @Input() edicion:boolean=false;
  faTrash=faTrashCan;
  constructor() { }

  ngOnInit(): void {
  }

}
