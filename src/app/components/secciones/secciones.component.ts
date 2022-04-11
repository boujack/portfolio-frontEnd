import { Component, OnInit, Output } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {
  @Output() educacion:any;
  constructor(private dbService:DatosService) { }

  ngOnInit(): void {
    this.dbService.getData().subscribe(data => {
      this.educacion=data.educacion;
    })
  }

}
