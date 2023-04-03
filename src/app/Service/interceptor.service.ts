import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private tokenService: TokenService) { }

  Intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    let intRequest = request;
    const token = this.tokenService.getToken();
    if(token != null) {
      intRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer' + token)
      });
    }
    return handler.handle(intRequest);
  }
}

export const interceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true
}];
