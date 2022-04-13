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
  private enabled:boolean=false;
  private btnClicked:Subject<Boton> = new Subject;
  private uiStatus:Subject<boolean> = new Subject;
  constructor() {

   }
  setBtnClk(btn:Boton){
    if(this.enabled)
      this.btnClicked.next(btn);
      console.log(btn);
  }
  getBtnClk():Observable<Boton>{
    return this.btnClicked.asObservable();
  }
  enableUI(){
    this.enabled=true;
    this.uiStatus.next(true);
  }
  getUIStatus():Observable<boolean>{
    return this.uiStatus.asObservable();
  }
}
