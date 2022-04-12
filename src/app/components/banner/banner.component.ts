import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Output() thisStyle:any;
  columnas:any="single-column"
  constructor() { }

  ngOnInit(): void {
  }
  sectOpen(){
    console.log("duo-column");
    this.columnas="duo-column";
  }
}
