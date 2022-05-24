import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiUserService } from 'src/app/services/api-user.service';

@Component({
  selector: 'app-modal-desc',
  templateUrl: './modal-desc.component.html',
  styleUrls: ['./modal-desc.component.css']
})
export class ModalDescComponent implements OnInit {
  @Input() visible:string;
  @Output() submit:EventEmitter<string> = new EventEmitter;
  constructor(private dataSvc:ApiUserService) { }

  ngOnInit(): void {
  }
  async submitDesc(d:string){
    await this.dataSvc.setDesc(d);
    this.submit.emit("false");
    await this.dataSvc.getUser();
  }
}
