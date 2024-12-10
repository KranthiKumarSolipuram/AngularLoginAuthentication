import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getData(url :string){
    return this.http.get(url);
  }

  public postData(url : string, obj : any) {
    return this.http.post(url,obj);
  }

}
