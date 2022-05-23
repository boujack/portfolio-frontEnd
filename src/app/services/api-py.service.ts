import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PyModel } from 'src/models/PyModel';

@Injectable({
  providedIn: 'root'
})
export class ApiPyService {

  project:Subject<PyModel[]>=new Subject;

  constructor(private jpaServer:HttpClient) {
  }

  getPyData(){
    this.jpaServer.get<PyModel[]>(environment.springBootUrl+'/proyecto').subscribe(pyData=>{      
      this.project.next(pyData);      
    })
  }
  rmPy(id:number){
    this.jpaServer.delete(environment.springBootUrl+'/rm/py?id='+id).subscribe()
  }
  savePy(e:PyModel){
    this.jpaServer.post(environment.springBootUrl+"/new/py",e).subscribe();
  }
}
