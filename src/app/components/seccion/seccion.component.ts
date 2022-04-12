import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
