import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  logged:boolean=false;
  @Output() loginClick = new EventEmitter;
  constructor(private elementRef:ElementRef) {
  }

  ngOnInit(): void {
  }
  onClick(){
    this.loginClick.emit();
  }

}
