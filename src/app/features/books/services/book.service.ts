import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';
import { IBook } from './Ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  root = 'http://localhost:4730/books';
  constructor(private http: HttpClient) {}

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

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.root);
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.root}/${isbn}`);
  }
  setBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.root}/${book.isbn}`, book);
  }
}
