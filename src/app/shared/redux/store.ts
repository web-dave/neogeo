import { IBook } from '../../features/books/services/Ibook';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IBooksState {
  booklist: IBook[];
}

@Injectable({
  providedIn: 'root'
})
export class StoreClass {
  private state: IBooksState = {
    booklist: []
  };

  private storeSubject = new BehaviorSubject(this.state);
  private store = this.storeSubject.asObservable();

  getStoreObservable() {
    return this.store;
  }

  private emit() {
    this.storeSubject.next(this.state);
  }
  setBookState(value: IBook[]) {
    this.state = {
      booklist: value
    };
    this.emit();
  }

  addBookState(book: IBook) {
    this.state = {
      booklist: [...this.state.booklist, book]
    };
    this.emit();
  }

  updateBookState(book: IBook) {
    this.state = {
      booklist: [...this.state.booklist]
    };
    const index = this.state.booklist.findIndex(b => b.isbn === book.isbn);
    if (index !== -1) {
      this.state.booklist[index] = book;
    } else {
      console.error('AAAAAAAAH Index ', index, ' not found!!');
    }
    this.emit();
  }
}
