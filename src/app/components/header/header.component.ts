import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() visible:string="false";
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(e:any){
    if(e)
      this.visible="true";
    else
      this.visible="false";
  }

}
