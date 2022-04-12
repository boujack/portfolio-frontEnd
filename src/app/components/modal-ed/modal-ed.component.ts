import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-ed',
  templateUrl: './modal-ed.component.html',
  styleUrls: ['./modal-ed.component.css']
})
export class ModalEdComponent implements OnInit {
  @Input() visible:string;
  constructor() { }

  ngOnInit(): void {
  }

}
