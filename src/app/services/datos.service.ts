import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private skValues:number[]=[];
  private skLabels:Subject<string[]>=new Subject;
  private skL:string[]=[];

  constructor(private dbJson:HttpClient) {
    this.dbJson.get('./assets/db/db.json').subscribe(d=>{
      let aux:any = d;
      this.skValues=aux.habilidades.values;
      this.skL=aux.habilidades.labels;
    })
  }

  getData():Observable<any>{
    return this.dbJson.get('./assets/db/db.json');
  }
  removeData(){
    console.log("remove DB data");
  }
  addData(){
    console.log("add DB data");
  }
  editSkValues(sk:number[]){
    this.skValues=sk;
  }
  editSkLables(sk:string[]){
    this.skLabels.next(sk);
  }
  getSkLabels():Observable<string[]>{
    return this.skLabels.asObservable();
  }
  getSkValues():number[]{
    return this.skValues;
  }
  getSkL():string[]{
    return this.skL;
  }
  editSkL(sk:string[]){
    this.skL=sk;
  }
}
