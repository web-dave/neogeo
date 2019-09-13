import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isbnValidator } from 'src/app/shared/validators/isbn.validator';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  dynForm: FormGroup;
  dynKeys: string[];
  tpl = {
    title: '',
    subtitle: ''
  };

  constructor(
    private builder: FormBuilder,
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dynForm = this.builder.group({});
    for (const key of Object.keys(this.tpl)) {
      this.addControl(this.dynForm, key);
    }
    console.log('-->', this.dynForm.controls);
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: ['', []],
      isbn: ['', [isbnValidator]],
      abstract: ['', []],
      numPages: [0, []],
      author: ['', []],
      publisher: this.builder.group({
        name: ['', []],
        url: ['', []]
      })
    });
  }

  addControl(form: FormGroup, key: string): void {
    console.log(key);
    form.addControl(key, new FormControl(''));
    console.log(form.controls);
    this.dynKeys = Object.keys(form.controls);
  }

  getKeys() {
    console.log('getKeys');
    return Object.keys(this.dynForm.value);
  }

  save() {
    this.service.createBook(this.form.value).subscribe(b => {
      // this.saved = true;
      this.form.markAsPristine();
      this.router.navigate(['..', b.isbn], { relativeTo: this.route });
    });
  }

  isObjectEmpty() {
    const emptyBook = JSON.stringify({
      title: '',
      subtitle: '',
      isbn: '',
      abstract: '',
      numPages: 0,
      author: '',
      publisher: {
        name: '',
        url: ''
      }
    });
    const formValues = JSON.stringify(this.form.value);
    console.log(emptyBook, formValues, emptyBook == formValues);
    return emptyBook == formValues;
  }

  isSaved(): boolean {
    console.log('Moin');
    return this.form.pristine || this.isObjectEmpty();
  }
}
