import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private skValues:number[]=[];
  private skL:string[]=[];
  private skLabels:Subject<string[]>=new Subject;
  private experiencia:any[];
  private educacion:any[];
  private proyectos:any[];
  private users:any[];
  private descripcion:string="";
  private obsDesc:Subject<string>=new Subject
  
  constructor(private dbJson:HttpClient) {
    this.dbJson.get('./assets/db/db.json').subscribe(d=>{
      let aux:any = d;
      this.skValues=aux.habilidades.values;
      this.skL=aux.habilidades.labels;
      this.experiencia=aux.experiencia;
      this.proyectos=aux.proyectos;
      this.educacion=aux.educacion;
      this.users=aux.users;
      this.descripcion=aux.descripcion;
    })
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
  getValues(s:number):any[]{
    let aux:any[]=[];
    switch(s){
      case 0:{
        aux=this.experiencia;
        break;
      }
      case 1:{
        aux=this.educacion;
        break
      }
      case 3:{
        aux=this.proyectos;
        break
      }
      default:{
        break;
      }
    }
    return aux;
  }
  getUsers():any[]{
    return this.users;
  }
  getDesc():string{
    return this.descripcion;
  }
  setDesc(d:string){
    this.descripcion=d;
    this.obsDesc.next(d);
  }
  getDescChange():Observable<string>{
    return this.obsDesc.asObservable();
  }
}
