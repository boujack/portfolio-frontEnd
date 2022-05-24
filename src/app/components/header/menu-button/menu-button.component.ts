import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {
  faBars=faBars;
  @Output() menu:EventEmitter<boolean> = new EventEmitter;
  private status:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  menuToggle(){
    this.status=!this.status
    this.menu.emit(this.status);
  }
}
