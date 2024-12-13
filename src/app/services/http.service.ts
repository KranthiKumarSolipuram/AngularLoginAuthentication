import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  // constructor(private http : HttpClient){
      
  // }

  // getData( url : string){
    
  //   return this.http.get(`${url}`);
  // }

  // getDataWithParam(url:string, param : any){
  //   return this.http.get(`${url}`, {params : new HttpParams().set("userId",param)})
  // }


  constructor(private http: HttpClient, private loadingService: LoadingService) {}

  // Fetch data without parameters
  getData(url: string) {
    this.loadingService.show(); // Show loading bar
    return this.http.get(url).pipe(
      finalize(() => {
        this.loadingService.hide(); // Hide loading bar
      })
    );
  }

  // Fetch data with query parameters
  getDataWithParam(url: string, param: any) {
    this.loadingService.show(); // Show loading bar
    const params = new HttpParams().set('userId', param); // Set query parameters
    return this.http.get(url, { params }).pipe(
      finalize(() => {
        this.loadingService.hide(); // Hide loading bar
      })
    );
  }
}
