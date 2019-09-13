import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PreloadDelayed implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data !== undefined) {
      if (route.data.preload) {
        return of(true).pipe(
          delay(route.data.delay),
          flatMap(() => fn())
        );
      }
    } else {
      return fn();
    }
  }
}
