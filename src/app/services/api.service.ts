import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EduModel } from 'src/models/EduModel';
import { Usuario } from 'src/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userdata:Usuario=new Usuario();
  educacion:Subject<EduModel[]>=new Subject;

  constructor(private jpaServer:HttpClient) { 
    this.jpaServer.get<Usuario>(environment.springBootUrl+'/user').subscribe(user=>{
      this.userdata=user;
    })
  }
  
  getUserData():Usuario{
    this.jpaServer.get<Usuario>(environment.springBootUrl+'/user').subscribe(user=>{
      this.userdata=user;
    })
    return this.userdata;
  }
  getEduData(){
    this.jpaServer.get<EduModel[]>(environment.springBootUrl+'/educacion').subscribe(edData=>{      
      this.educacion.next(edData);      
    })
  }
  rmEdu(id:number){
    this.jpaServer.delete(environment.springBootUrl+'/rm/edu?id='+id).subscribe()
  }
  saveEdu(e:EduModel){
    this.jpaServer.post(environment.springBootUrl+"/new/edu",e).subscribe();
  }
}
