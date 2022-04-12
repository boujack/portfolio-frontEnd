import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-py',
  templateUrl: './modal-py.component.html',
  styleUrls: ['./modal-py.component.css']
})
export class ModalPyComponent implements OnInit {
  @Input() visible:string;
  constructor() { }

  ngOnInit(): void {
  }

}
