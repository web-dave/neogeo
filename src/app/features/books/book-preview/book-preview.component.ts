import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book;
  @Output() bookSelected = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  selectThisBook() {
    this.bookSelected.emit(this.book);
  }
}
