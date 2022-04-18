import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-modal-desc',
  templateUrl: './modal-desc.component.html',
  styleUrls: ['./modal-desc.component.css']
})
export class ModalDescComponent implements OnInit {
  @Input() visible:string;
  @Output() submit:EventEmitter<string> = new EventEmitter;
  constructor(private dataSvc:DatosService) { }

  ngOnInit(): void {
  }
  submitDesc(d:string){
    this.dataSvc.setDesc(d);
    this.submit.emit("false");
  }
}
