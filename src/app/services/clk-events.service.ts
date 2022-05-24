import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClkEventsService {
  private enabled:boolean;
  private editEnable:Subject<boolean> = new Subject;
  private edit:boolean=false;
  private btnClicked:Subject<number> = new Subject;
  private uiStatus:Subject<boolean> = new Subject;
  constructor() {
    this.editEnable.next(false);
   }
  setBtnClk(btn:number){
    if(this.enabled)
      this.btnClicked.next(btn);
  }
  getBtnClk():Observable<number>{
    return this.btnClicked.asObservable();
  }
  enableUI(){
    this.enabled=true;
    this.uiStatus.next(true);
  }
  getUIStatus():Observable<boolean>{
    return this.uiStatus.asObservable();
  }
  getEnabled():boolean{
    return this.enabled;
  }
  setEdit(x:boolean){
    this.editEnable.next(x);
    this.edit=x;
  }
  getEdit():boolean{
    return this.edit;
  }
  getEditStatus():Observable<boolean>{
    return this.editEnable.asObservable();
  }
}
