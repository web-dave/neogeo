import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../services/Ibook';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getBooks().subscribe(b => (this.books = b));
  }

  getThisBook(b: IBook) {
    console.log('getThisBook --->', b);
    this.router.navigate([b.isbn], { relativeTo: this.route });
  }
}
