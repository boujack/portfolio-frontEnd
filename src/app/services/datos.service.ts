import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private tempSk:Subject<number[]>=new Subject;
  constructor(private dbJson:HttpClient) { }

  getData():Observable<any>{
    return this.dbJson.get('./assets/db/db.json');
  }
  removeData(){
    console.log("remove DB data");
  }
  addData(){
    console.log("add DB data");
  }
  editData(sk:number[]){
    this.tempSk.next(sk);
  }
  getSkData():Observable<number[]>{
    return this.tempSk.asObservable();
  }
}
