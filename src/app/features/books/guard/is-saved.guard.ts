import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate
} from '@angular/router';
import { BookNewComponent } from '../book-new/book-new.component';

@Injectable({
  providedIn: 'root'
})
export class IsSavedGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(
    component: BookNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    if (!component.isSaved()) {
      return confirm(`It's not save to leave yet`);
    } else if (!component.isObjectEmpty()) {
    }
    return true;
  }
}
