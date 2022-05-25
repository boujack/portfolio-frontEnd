import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { ApiUserService } from './api-user.service';

@Injectable({
  providedIn: 'root'
})
export class FireCloudService {

  constructor(private fireStorage:AngularFireStorage, private apiSvc:ApiUserService) { }
  
  uploadImg(f:File,dir:string){

    let fileExt:string = f.name.split('.')[f.name.split('.').length-1];
    let fileRef:string;
    return new Promise<string>((resolve)=>{
    if(dir==="banner"||dir==="profile"){
      fileRef=dir+"/"+dir+"."+fileExt;
    }
    else{
      fileRef=dir+"/"+f.name;
    }
        const storageRef = this.fireStorage.ref(fileRef);
        const uploadTask = this.fireStorage.upload(fileRef,f);
        uploadTask.snapshotChanges().pipe(finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL: any) => {
          switch(dir){
            case "banner":{
              this.apiSvc.setBgImg(downloadURL);
              break;
            }
            case "profile":{
              this.apiSvc.setProfImg(downloadURL);
              break;
            }
            default:{
              break;
            }
          }
          resolve(downloadURL);
          });
        })
  ).subscribe();})
  }
}
