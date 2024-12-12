import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token=localStorage.getItem("token");
    let header=new HttpHeaders();
    header.append("Authorization: ","bearer "+ token);
    console.log(token);
    // if(token){
    //   const modReq = request.clone({
    //     setHeaders: {
    //       "authorization: " : "bearer "+ token
    //     }
    //   });
    //   return next.handle(modReq);
    // }
    
    return next.handle(request);
  }
}
