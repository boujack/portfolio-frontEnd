import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { XpModel } from 'src/models/XpModel';

@Injectable({
  providedIn: 'root'
})
export class ApiXpService {

  apiUrl:String="http://localhost:8080";
  educacion:Subject<XpModel[]>=new Subject;

  constructor(private jpaServer:HttpClient) {
  }

  getExpData(){
    this.jpaServer.get<XpModel[]>(this.apiUrl+'/experiencia').subscribe(xpData=>{      
      this.educacion.next(xpData);      
    })
  }
  rmExp(id:number){
    this.jpaServer.delete(this.apiUrl+'/rm/exp?id='+id).subscribe()
  }
  saveExp(e:XpModel){
    this.jpaServer.post(this.apiUrl+"/new/exp",e).subscribe();
  }
}
