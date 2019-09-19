import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { IBook } from '../services/Ibook';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() bookSelected = new EventEmitter<IBook>();
  constructor() {}

  ngOnInit() {}

  selectThisBook() {
    this.bookSelected.emit(this.book);
  }
}
