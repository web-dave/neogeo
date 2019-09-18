import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../services/Ibook';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { bookfeaturename, IBookState, getBooks } from '../redux/book.store';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;
  books: IBook[];
  constructor(
    private service: BookService,
    private store: Store<IBookState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.books$ = this.store.select(getBooks);
    // this.service.getBooks().subscribe(b => (this.books = b));
  }

  getThisBook(b: IBook) {
    console.log('getThisBook --->', b);
    this.router.navigate([b.isbn], { relativeTo: this.route });
  }
}
