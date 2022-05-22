import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Usuario } from 'src/models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private user:Usuario;
  private descripcion:string="";
  private obsDesc:Subject<string>=new Subject;
  private apiUrl:String="http://localhost:8080";
  
  constructor(private jpaServer:HttpClient) {
    this.jpaServer.get<Usuario>(this.apiUrl+'/user').subscribe(user=>{
      let aux:any = user; 
      this.user=user;
      this.descripcion=aux.descripcion; 
      console.log(user);
    })
  }
  getUsers():Usuario{
    return this.user;
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
