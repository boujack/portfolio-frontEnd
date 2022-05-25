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
  springBootUrl:string = 'https://portfolio-argprog.herokuapp.com'

  constructor(private apiSvc:HttpClient) { 
  }

  getEduData(){
    return new Promise<EduModel[]>((resolve)=>{
      this.apiSvc.get<EduModel[]>(this.springBootUrl+'/educacion')
      .subscribe(edData=>{      
        this.educacion.next(edData);
        resolve(edData)      
      })
    })
    
  }

  rmEdu(id:number){
    return new Promise<boolean>((resolve)=>{
      this.apiSvc.delete(this.springBootUrl+'/rm/edu?id='+id)
      .subscribe(()=>{
        resolve(true);
      })
    })
    
  }

  saveEdu(e:EduModel){
    return new Promise<boolean>((resolve)=>{
      this.apiSvc.post(this.springBootUrl+"/new/edu",e)
      .subscribe(()=>{
        resolve(true);
      });
    })
    
  }
}
