import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SkModel } from 'src/models/SkModel';

@Injectable({
  providedIn: 'root'
})
export class ApiSkService {

  apiUrl:String="http://localhost:8080";
  skill:Subject<SkModel[]>=new Subject;

  constructor(private jpaServer:HttpClient) {
  }

  getSkData(){
    this.jpaServer.get<SkModel[]>(this.apiUrl+'/skill').subscribe(skData=>{      
      this.skill.next(skData);      
    })
  }
  rmSk(id:number){
    this.jpaServer.delete(this.apiUrl+'/rm/sk?id='+id).subscribe()
  }
  saveSk(e:SkModel){
    this.jpaServer.post(this.apiUrl+"/new/sk",e).subscribe();    
  }
  saveAllSk(s:SkModel[]){
    this.jpaServer.post(this.apiUrl+"/new/skAll",s).subscribe();
  }
}
