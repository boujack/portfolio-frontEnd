import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    this.jpaServer.get<XpModel[]>(environment.springBootUrl+'/experiencia').subscribe(xpData=>{      
      this.experiencia.next(xpData);      
    })
  }
  rmExp(id:number){
    this.jpaServer.delete(environment.springBootUrl+'/rm/exp?id='+id).subscribe()
  }
  saveExp(e:XpModel){
    this.jpaServer.post(environment.springBootUrl+"/new/exp",e).subscribe();
  }
}
