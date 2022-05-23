import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class FireCloudService {

  constructor(private fireStorage:AngularFireStorage, private apiSvc:DatosService) { }
  
  uploadImg(f:File,dir:string){

    let fileExt:string = f.name.split('.')[f.name.split('.').length-1];
    let fileRef:string;

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
          console.log(downloadURL);
          this.apiSvc.setBgImg(downloadURL);
          this.apiSvc.getUsers();
          });
        })
  ).subscribe();
  }
}
