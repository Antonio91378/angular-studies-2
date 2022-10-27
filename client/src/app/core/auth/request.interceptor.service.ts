import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptorService implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.localStorageService.hasToken()) {
      const token = this.localStorageService.getToken();
      req = req.clone({
        setHeaders: {
          'x-access-token': token!,
        },
      });
    }
    return next.handle(req);
  }
}
