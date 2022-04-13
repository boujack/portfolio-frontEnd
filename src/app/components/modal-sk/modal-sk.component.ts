import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-sk',
  templateUrl: './modal-sk.component.html',
  styleUrls: ['./modal-sk.component.css']
})
export class ModalSkComponent implements OnInit {
  @Input() visible:string;
  @Output() submit:EventEmitter<string> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

}
