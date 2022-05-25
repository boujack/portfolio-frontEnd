import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PyModel } from 'src/models/PyModel';

@Injectable({
  providedIn: 'root'
})
export class ApiPyService {

  project:Subject<PyModel[]>=new Subject;
  springBootUrl:string = 'https://portfolio-argprog.herokuapp.com'

  constructor(private jpaServer:HttpClient) {
  }

  getPyData(){
    return new Promise<PyModel[]>((resolve)=>{
      this.jpaServer.get<PyModel[]>(this.springBootUrl+'/proyecto')
      .subscribe(pyData=>{      
        this.project.next(pyData);
        resolve(pyData);     
      })
    })
  }
  rmPy(id:number){
    return new Promise<boolean>((resolve)=>{
      this.jpaServer.delete(this.springBootUrl+'/rm/py?id='+id)
      .subscribe(()=>{
        resolve(true);
      })
    })
    
  }
  savePy(e:PyModel){
    return new Promise<boolean>((resolve)=>{
      this.jpaServer.post(this.springBootUrl+"/new/py",e)
      .subscribe(()=>{
        resolve(true);
      });}
    )
  }
}
