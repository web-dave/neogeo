import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { Store } from '@ngrx/store';
import { IBookState } from './redux/book.store';
import { WaitForBooks } from './redux/book.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(private store: Store<IBookState>) {}

  ngOnInit() {
    this.store.dispatch(new WaitForBooks());
  }
}
