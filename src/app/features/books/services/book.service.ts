import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, empty } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { IBook } from './Ibook';
import {
  IBookState,
  getBooks as getStoreBooks,
  getBookEntities
} from '../redux/book.store';
import { Store } from '@ngrx/store';
import { LoadBooks, UpdateBook } from '../redux/book.actions';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  root = 'http://localhost:4730/books';
  constructor(private http: HttpClient, private store: Store<IBookState>) {}

  loadBooks() {
    this.getBooks().subscribe(bl => this.store.dispatch(new LoadBooks(bl)));
  }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.root);
  }

  getBookFromBackend(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.root}/${isbn}`);
  }
  getBook(isbn: string): Observable<IBook> {
    return this.store.select(getBookEntities).pipe(map(bl => bl[isbn]));
  }
  setBook(book: IBook) {
    this.store.dispatch(new UpdateBook(book));
    return of(null);
  }
  setBookOnBackend(book: IBook) {
    this.http.put<IBook>(`${this.root}/${book.isbn}`, book).subscribe();
  }
  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.root, book);
  }

  getBooks_Foo(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.root).pipe(
      tap(data => console.log(data)),
      map((bl: IBook[]) => {
        if (bl === null) {
          return [];
        }
        return bl.map(b => {
          if (!b.title) {
            b.title = 'na';
          }
          return b;
        });
      })
    );
  }
}
