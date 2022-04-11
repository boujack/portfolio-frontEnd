import { Component, OnInit, Input } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  @Input() educacion:any;
  constructor() { }

  ngOnInit(): void {
  }

}
