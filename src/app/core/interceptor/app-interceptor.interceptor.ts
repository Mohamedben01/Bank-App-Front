import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class AppInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newHeaders = new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTION',
    });

    if(!request.url.includes("/auth/login")){
      let newRequest = request.clone({
       headers : request.headers.set('Authorization','Bearer '+this.authService.accessToken)
     })
     return next.handle(newRequest).pipe(
       catchError(err=>{
         if(err.status==401){
           this.authService.logout();
         }
         return throwError(err.message)
       })
     );
  }else return next.handle(request);
}
}
