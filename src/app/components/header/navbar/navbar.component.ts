import { Component, Input, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() visible:string="false";
  faIg=faInstagram;
  faFb=faFacebook;
  faTw=faTwitter;
  faWsp=faWhatsapp;
  constructor() { }

  ngOnInit(): void {
  }
}
