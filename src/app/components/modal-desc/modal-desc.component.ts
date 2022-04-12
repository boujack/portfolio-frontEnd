import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-desc',
  templateUrl: './modal-desc.component.html',
  styleUrls: ['./modal-desc.component.css']
})
export class ModalDescComponent implements OnInit {
  @Input() visible:string;
  constructor() { }

  ngOnInit(): void {
  }

}
