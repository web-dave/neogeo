import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { IBook } from '../services/Ibook';
import { Subscription, of } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  private i = 0;
  private isbns: string[] = [
    '978-0-20163-361-0',
    '978-3-86490-120-1',
    '978-1-59327-584-6'
  ];
  pfui: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {
    setInterval(() => console.log(this.pfui.length), 1000);
  }

  ngOnInit() {
    this.pfui.push(
      this.route.params
        .pipe(
          switchMap((params: { isbn: string }) =>
            this.service.getBook(params.isbn)
          )
        )
        .subscribe(b => (this.book = b))
    );
    // this.pfui.push(
    //   this.route.params.subscribe((params: { isbn: string }) =>
    //     this.pfui.push(
    //       this.service.getBook(params.isbn).subscribe(b => (this.book = b))
    //     )
    //   )
    // );
  }
  setParam() {
    this.i++;
    if (this.i === 3) {
      this.i = 0;
    }
    this.router.navigate(['..', this.isbns[this.i]], {
      relativeTo: this.route
    });
  }
}
