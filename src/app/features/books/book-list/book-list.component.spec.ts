import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BookService } from '../services/book.service';
import { of } from 'rxjs';
// tslint:disable:max-line-length

export const books = [
  {
    title: 'Design Patterns',
    subtitle: 'Elements of Reusable Object-Oriented Software',
    isbn: '978-0-20163-361-0',
    abstract:
      'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
    numPages: 395,
    author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
    publisher: {
      name: 'Addison-Wesley',
      url: 'http://www.addison-wesley.de/'
    },
    id: '978-0-20163-361-0'
  },
  {
    title: 'REST und HTTP',
    subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
    isbn: '978-3-86490-120-1',
    abstract:
      'Das Buch bietet eine theoretisch fundierte, vor allem aber praxistaugliche Anleitung zum professionellen Einsatz von RESTful HTTP. Es beschreibt den Architekturstil REST (Representational State Transfer) und seine Umsetzung im Rahmen der Protokolle des World Wide Web (HTTP, URIs und andere).',
    numPages: 330,
    author: 'Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf',
    publisher: {
      name: 'dpunkt.verlag',
      url: 'http://dpunkt.de/'
    }
  },
  {
    title: 'Eloquent JavaScript',
    subtitle: 'A Modern Introduction to Programming',
    isbn: '978-1-59327-584-6',
    abstract:
      'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
    numPages: 472,
    author: 'Marijn Haverbeke',
    publisher: {
      name: 'No Starch Press',
      url: 'https://www.nostarch.com/'
    }
  }
];

export class MockBookService {
  getBooks() {
    return of(books);
  }
}

fdescribe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let mySpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: BookService,
          useClass: MockBookService
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    const service = TestBed.get(BookService);
    // mySpy = spyOn(service, 'getBooks').and.returnValue(of(books));
    mySpy = spyOn(service, 'getBooks').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call books', () => {
    expect(mySpy).toHaveBeenCalled();
  });
});
