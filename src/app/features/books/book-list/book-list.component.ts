import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../services/Ibook';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.service
      .getBooks()
      .pipe(tap(bl => console.log(bl)))
      .subscribe(b => {
        this.books = b;
        this.cdr.detectChanges();
      });
  }

  getThisBook(b: IBook) {
    console.log('getThisBook --->', b);
    this.router.navigate([b.isbn], { relativeTo: this.route });
  }
}
