import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private dbJson:HttpClient) { }

  getData():Observable<any>{
    return this.dbJson.get('./assets/db/db.json');
  }
  removeData(){
    console.log("remove DB data");
  }
  addData(){
    console.log("add DB data");
  }
}
