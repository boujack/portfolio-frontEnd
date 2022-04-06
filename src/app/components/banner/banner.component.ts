import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  onKeyEnter(ev:KeyboardEvent){
    console.log(ev.key);
  }
}
