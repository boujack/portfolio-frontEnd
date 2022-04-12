import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-xp',
  templateUrl: './modal-xp.component.html',
  styleUrls: ['./modal-xp.component.css']
})
export class ModalXpComponent implements OnInit {
  @Input() visible:string;
  constructor() { }

  ngOnInit(): void {
  }

}
