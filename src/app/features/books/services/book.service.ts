import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  root = 'http://localhost:4730/books/';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>(this.root).pipe(tap(data => console.log(data)));
  }
}
