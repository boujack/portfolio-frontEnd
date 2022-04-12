import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-placa',
  templateUrl: './placa.component.html',
  styleUrls: ['./placa.component.css']
})
export class PlacaComponent implements OnInit {
  key:any;
  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.key = event.key;
    console.log(this.key)
  } 
}
