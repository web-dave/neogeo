import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';
import { IBook } from './Ibook';
import { StoreClass } from 'src/app/shared/redux/store';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  root = 'http://localhost:4730/books';
  constructor(private http: HttpClient, private store: StoreClass) {}

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
  loadBooks(): void {
    this.http
      .get<IBook[]>(this.root)
      .subscribe(bl => this.store.setBookState(bl));
  }

  getBooks(): Observable<IBook[]> {
    return this.store.getStoreObservable().pipe(map(bs => bs.booklist));
  }

  getBook(isbn: string): Observable<IBook> {
    return this.store.getStoreObservable().pipe(
      map(bs => bs.booklist),
      map(bl => bl.find(b => b.isbn === isbn))
    );
  }
  setBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.root}/${book.isbn}`, book);
  }
  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.root, book);
  }
}
