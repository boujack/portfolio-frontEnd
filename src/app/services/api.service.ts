import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { EduModel } from 'src/models/EduModel';
import { Usuario } from 'src/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:String="http://localhost:8080";
  userdata:Usuario=new Usuario();
  educacion:Subject<EduModel[]>=new Subject;

  constructor(private jpaServer:HttpClient) { 
    this.jpaServer.get<Usuario>(this.apiUrl+'/user').subscribe(user=>{
      this.userdata=user;
    })
  }
  
  getUserData():Usuario{
    this.jpaServer.get<Usuario>(this.apiUrl+'/user').subscribe(user=>{
      this.userdata=user;
    })
    return this.userdata;
  }
  getEduData(){
    this.jpaServer.get<EduModel[]>(this.apiUrl+'/educacion').subscribe(edData=>{      
      this.educacion.next(edData);      
    })
  }
  rmEdu(id:number){
    this.jpaServer.delete(this.apiUrl+'/rm/edu?id='+id).subscribe()
  }
  saveEdu(e:EduModel){
    this.jpaServer.post(this.apiUrl+"/new/edu",e).subscribe();
  }
}
