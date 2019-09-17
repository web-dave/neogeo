import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(private service: BookService) {}

  ngOnInit() {
    this.service.loadBooks();
  }
}
