import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books;
  constructor(private service: BookService) {}

  ngOnInit() {
    this.service.getBooks().subscribe(b => (this.books = b));
  }
}
