import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EduModel } from 'src/models/EduModel';

@Injectable({
  providedIn: 'root'
})
export class ApiEdService {

  educacion:Subject<EduModel[]>=new Subject;  

  constructor(private apiSvc:HttpClient) { 
  }

  getEduData(){
    return new Promise<EduModel[]>((resolve)=>{
      this.apiSvc.get<EduModel[]>(environment.springBootUrl+'/educacion')
      .subscribe(edData=>{      
        this.educacion.next(edData);
        resolve(edData)      
      })
    })
    
  }

  rmEdu(id:number){
    return new Promise<boolean>((resolve)=>{
      this.apiSvc.delete(environment.springBootUrl+'/rm/edu?id='+id)
      .subscribe(()=>{
        resolve(true);
      })
    })
    
  }

  saveEdu(e:EduModel){
    return new Promise<boolean>((resolve)=>{
      this.apiSvc.post(environment.springBootUrl+"/new/edu",e)
      .subscribe(()=>{
        resolve(true);
      });
    })
    
  }
}
