import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Boton{
  id:number,
  name:string,
  pressed:boolean
}
@Injectable({
  providedIn: 'root'
})
export class ClkEventsService {

  private btnClicked:Subject<Boton> = new Subject;
  constructor() {

   }
  setBtnClk(btn:Boton){
    this.btnClicked.next(btn);
  }
  getBtnClk():Observable<Boton>{
    return this.btnClicked.asObservable();
  }
}
