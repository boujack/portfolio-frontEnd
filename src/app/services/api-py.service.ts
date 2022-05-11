import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PyModel } from 'src/models/PyModel';

@Injectable({
  providedIn: 'root'
})
export class ApiPyService {

  apiUrl:String="http://localhost:8080";
  educacion:Subject<PyModel[]>=new Subject;

  constructor(private jpaServer:HttpClient) {
  }

  getPyData(){
    this.jpaServer.get<PyModel[]>(this.apiUrl+'/proyecto').subscribe(pyData=>{      
      this.educacion.next(pyData);      
    })
  }
  rmPy(id:number){
    this.jpaServer.delete(this.apiUrl+'/rm/py?id='+id).subscribe()
  }
  savePy(e:PyModel){
    this.jpaServer.post(this.apiUrl+"/new/py",e).subscribe();
  }
}
