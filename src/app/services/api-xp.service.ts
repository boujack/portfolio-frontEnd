import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { XpModel } from 'src/models/XpModel';

@Injectable({
  providedIn: 'root'
})
export class ApiXpService {

  experiencia:Subject<XpModel[]>=new Subject;
  springBootUrl:string = 'https://portfolio-argprog.herokuapp.com'

  constructor(private jpaServer:HttpClient) {
  }

  getExpData(){
    return new Promise<XpModel[]>((resolve)=>{
      this.jpaServer.get<XpModel[]>(this.springBootUrl+'/experiencia')
      .subscribe(xpData=>{      
        this.experiencia.next(xpData); 
        resolve(xpData);     
      })
    })
    
  }
  rmExp(id:number){
    return new Promise<boolean>((resolve)=>{
      this.jpaServer.delete(this.springBootUrl+'/rm/exp?id='+id)
      .subscribe(()=>{
        resolve(true)
      })
    })
    
  }
  saveExp(e:XpModel){
    return new Promise<boolean>((resolve)=>{
      this.jpaServer.post(this.springBootUrl+"/new/exp",e)
      .subscribe(()=>{
        resolve(true)
      });
    })
    
  }
}
