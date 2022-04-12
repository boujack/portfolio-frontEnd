import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-sk',
  templateUrl: './modal-sk.component.html',
  styleUrls: ['./modal-sk.component.css']
})
export class ModalSkComponent implements OnInit {
  @Input() visible:string;
  constructor() { }

  ngOnInit(): void {
  }

}
