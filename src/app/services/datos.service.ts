import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of,Subject } from 'rxjs';
import { Usuario } from 'src/models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private skValues:number[]=[];
  private skL:string[]=[];  
  private experiencia:any[];
  private educacion:any[];
  private proyectos:any[];
  private users:any[];
  private descripcion:string="";

  private skLabels:Subject<string[]>=new Subject;
  private obsDesc:Subject<string>=new Subject;
  private apiUrl:String="http://localhost:8080";
  
  constructor(private dbJson:HttpClient, private jpaServer:HttpClient) {
    this.dbJson.get('./assets/db/db.json').subscribe(d=>{
      let aux:any = d;
      this.skValues=aux.habilidades.values;
      this.skL=aux.habilidades.labels;
      this.experiencia=aux.experiencia;
      this.proyectos=aux.proyectos;
      this.educacion=aux.educacion;
      this.users=aux.users;
    })
    this.jpaServer.get<Usuario>(this.apiUrl+'/user').subscribe(user=>{
      let aux:any = user; 
      this.descripcion=aux.descripcion; 
    })
  }
  removeData(seccion:string,id:number){
    console.log(seccion+":"+id);
    switch(seccion){
      case "Experiencia":{
        this.experiencia.filter(function(value, index, arr){ 
          if(value.id==id)
            arr.splice(index,1);
        });
        console.log(this.experiencia);
        break;
      }
      case "Educacion":{
        this.educacion.filter(function(value, index, arr){ 
          if(value.id==id)
            arr.splice(index,1);
        });
        console.log(this.educacion);
        break;
      }
      case "Proyectos":{
        this.proyectos.filter(function(value, index, arr){ 
          if(value.id==id)
            arr.splice(index,1);
        });
        console.log(this.proyectos);
        break;
      }
    }
  }
  editData(seccion:string,info:any){
    switch(seccion){
      case "Experiencia":{
        this.experiencia.filter(function(value, index, arr){ 
          if(value.id==info.id)
            arr[index]=info;
        });
        console.log(this.experiencia);
        break;
      }
      case "Educacion":{
        this.educacion.filter(function(value, index, arr){ 
          if(value.id==info.id)
            arr[index]=info;
        });
        console.log(this.educacion);
        break;
      }
      case "Proyectos":{
        this.proyectos.filter(function(value, index, arr){ 
          if(value.id==info.id)
            arr[index]=info;
        });
        console.log(this.proyectos);
        break;
      }
    }
  }
  addData(seccion:number,info:any){
    switch(seccion){
      case 0:{
        info.id=this.experiencia.length+1;
        this.experiencia.push(info);
        console.log(this.experiencia);
        break;
      }
      case 1:{
        info.id=this.educacion.length+1;
        this.educacion.push(info);
        break;
      }
      case 3:{
        info.id=this.proyectos.length+1;
        this.proyectos.push(info);
        break;
      }
    }
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
