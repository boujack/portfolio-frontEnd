import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { XpModel } from 'src/models/XpModel';

@Injectable({
  providedIn: 'root'
})
export class ApiXpService {

  experiencia:Subject<XpModel[]>=new Subject;

  constructor(private jpaServer:HttpClient) {
  }

  getExpData(){
    return new Promise<XpModel[]>((resolve)=>{
      this.jpaServer.get<XpModel[]>(environment.springBootUrl+'/experiencia')
      .subscribe(xpData=>{      
        this.experiencia.next(xpData); 
        resolve(xpData);     
      })
    })
    
  }
  rmExp(id:number){
    return new Promise<boolean>((resolve)=>{
      this.jpaServer.delete(environment.springBootUrl+'/rm/exp?id='+id)
      .subscribe(()=>{
        resolve(true)
      })
    })
    
  }
  saveExp(e:XpModel){
    return new Promise<boolean>((resolve)=>{
      this.jpaServer.post(environment.springBootUrl+"/new/exp",e)
      .subscribe(()=>{
        resolve(true)
      });
    })
    
  }
}
