import { Injectable, inject } from '@angular/core';
import { LoadingService } from './loading.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  service = inject(LoadingService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.service.show(); // Activa el spinner

    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(() => {
          this.service.hide();
        }, 300); // Desactiva el spinner
      })
    );
  }
}
