import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-desc',
  templateUrl: './modal-desc.component.html',
  styleUrls: ['./modal-desc.component.css']
})
export class ModalDescComponent implements OnInit {
  @Input() visible:string;
  @Output() submit:EventEmitter<string> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

}
