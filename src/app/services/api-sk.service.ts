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
    this.jpaServer.get<SkModel[]>(environment.springBootUrl+'/skill').subscribe(skData=>{      
      this.skill.next(skData);      
    })
  }
  rmSk(id:number){
    this.jpaServer.delete(environment.springBootUrl+'/rm/sk?id='+id).subscribe()
  }
  saveSk(e:SkModel){
    this.jpaServer.post(environment.springBootUrl+"/new/sk",e).subscribe();    
  }
  saveAllSk(s:SkModel[]){
    this.jpaServer.post(environment.springBootUrl+"/new/skAll",s).subscribe();
  }
}
