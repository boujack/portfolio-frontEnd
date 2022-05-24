import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SkModel } from 'src/models/SkModel';

@Injectable({
  providedIn: 'root'
})
export class ApiSkService {

  skill:Subject<SkModel[]>=new Subject;

  constructor(private jpaServer:HttpClient) {
  }

  getSkData(){
    return new Promise<SkModel[]>((resolve)=>{
      this.jpaServer.get<SkModel[]>(environment.springBootUrl+'/skill').subscribe(skData=>{      
        this.skill.next(skData);
        resolve(skData);      
      })
    })
    
  }
  rmSk(id:number){
    return new Promise<boolean>((resolve)=>{
      this.jpaServer.delete(environment.springBootUrl+'/rm/sk?id='+id)
      .subscribe(()=>{
        resolve(true)
      })
    })    
  }
  saveSk(e:SkModel){
    return new Promise<boolean>((resolve)=>{
      this.jpaServer.post(environment.springBootUrl+"/new/sk",e)
      .subscribe(()=>{
        resolve(true)
      });  
    })      
  }
  saveAllSk(s:SkModel[]){
    return new Promise<boolean>((resolve)=>{
      this.jpaServer.post(environment.springBootUrl+"/new/skAll",s)
      .subscribe(()=>{
        resolve(true)
      });
    })
  }
}
