import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  private user:Usuario;
  userSubj:Subject<Usuario>=new Subject;
  
  constructor(private jpaServer:HttpClient) {
    this.jpaServer.get<Usuario>(environment.springBootUrl+'/user')
    .subscribe(user=>{
      this.user=user;
      this.userSubj.next(user);
    })
  }

  getUser():Promise<Usuario>{
    return new Promise((resolve)=>{
      this.jpaServer.get<Usuario>(environment.springBootUrl+'/user')
      .subscribe(user=>{
        this.userSubj.next(user);
        resolve(user);
      })
    })
  }

  setDesc(d:string){    
    this.user.descripcion=d;
    this.jpaServer.post(environment.springBootUrl+"/user",this.user)
    .subscribe(()=>{
      this.getUser();
    });
  }

  setBgImg(url:string){
    this.user.urlBanner=url;
    this.jpaServer.post(environment.springBootUrl+"/user",this.user)
    .subscribe(()=>{
      this.getUser();
    });
  }

  setProfImg(url:string){
    this.user.urlPerfil=url;
    this.jpaServer.post(environment.springBootUrl+"/user",this.user)
    .subscribe(()=>{
      this.getUser();
    });
  }
}
