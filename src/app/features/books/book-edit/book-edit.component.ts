import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IBook } from '../services/Ibook';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: IBook;
  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: { isbn: string }) =>
          this.service.getBook(params.isbn)
        )
      )
      .subscribe(b => (this.book = b));
  }
  saveBook() {
    this.service
      .setBook(this.book)
      .subscribe(b => this.router.navigate(['..'], { relativeTo: this.route }));
  }
}
