import { Injectable } from '@angular/core';
import { Actions, ofType, Effect, createEffect } from '@ngrx/effects';
import { BookService } from '../services/book.service';
import { WAIT_FOR_BOOKS, UPDATE_BOOK, UpdateBook } from './book.actions';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class BookEffects {
  constructor(private actions: Actions, private service: BookService) {}

  @Effect({ dispatch: false })
  load$ = this.actions.pipe(
    ofType(WAIT_FOR_BOOKS),
    tap(() => this.service.loadBooks())
  );

  @Effect({ dispatch: false })
  update$ = this.actions.pipe(
    ofType(UPDATE_BOOK),
    tap((action: UpdateBook) => this.service.setBookOnBackend(action.book))
  );
}
