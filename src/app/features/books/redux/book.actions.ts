import { Action } from '@ngrx/store';
import { IBook } from '../services/Ibook';
import { Update } from '@ngrx/entity';

export const LOAD_BOOKS = '[books] load books';
export const WAIT_FOR_BOOKS = '[books] wait for books';
export const UPDATE_BOOK = '[books] update book';
export const CREATE_BOOK = '[books] create book';

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;
  constructor(public books: IBook[]) {}
}

export class WaitForBooks implements Action {
  readonly type = WAIT_FOR_BOOKS;
}

export class UpdateBook implements Action {
  readonly type = UPDATE_BOOK;
  constructor(public book: IBook) {}
}
export class CreateBook implements Action {
  readonly type = CREATE_BOOK;
  constructor(public book: IBook) {}
}

export type BookActions = LoadBooks | WaitForBooks | UpdateBook | CreateBook;
