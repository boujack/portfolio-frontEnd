import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  private user:Usuario;
  private descripcion:string="";
  private obsDesc:Subject<string>=new Subject;
  userSubj:Subject<Usuario>=new Subject;
  
  constructor(private jpaServer:HttpClient) {
    this.jpaServer.get<Usuario>(environment.springBootUrl+'/user').subscribe(user=>{
      let aux:any = user; 
      this.user=user;
      this.descripcion=aux.descripcion; 
    })
  }

  getUsers():Usuario{
    this.jpaServer.get<Usuario>(environment.springBootUrl+'/user').subscribe(user=>{
      let aux:any = user; 
      this.user=user;
      this.userSubj.next(user);
      this.descripcion=aux.descripcion; 
    })
    return this.user;
  }

  getReq():Promise<Usuario>{
    return new Promise((resolve)=>{
      this.jpaServer.get<Usuario>(environment.springBootUrl+'/user').subscribe(user=>{
        resolve(user);
      })
    })
  }

  getDesc():string{
    return this.descripcion;
  }

  setDesc(d:string){
    this.descripcion=d;
    this.obsDesc.next(d);
    this.user.descripcion=d;
    this.jpaServer.post(environment.springBootUrl+"/user",this.user).subscribe();
  }

  setBgImg(url:string){
    this.user.urlBanner=url;
    this.jpaServer.post(environment.springBootUrl+"/user",this.user).subscribe();
  }

  setProfImg(url:string){
    this.user.urlPerfil=url;
    this.jpaServer.post(environment.springBootUrl+"/user",this.user).subscribe();
  }

  getDescChange():Observable<string>{
    return this.obsDesc.asObservable();
  }
}
