import { HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //// This makes the service available throughout the app
})
export class LoggerService {

  constructor() { }

  log(message: string) {
    console.log(message);
  }

  //imtercept
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cloned = req.clone({ headers: req.headers.set('Authorization', 'Bearer token') });
    return next.handle(cloned);
  }
  //this.http.get('api/data', { headers: new HttpHeaders().set('Authorization', 'Bearer token') });


}
