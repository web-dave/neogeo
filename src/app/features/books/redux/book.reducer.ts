import { initialState, IBookState, bookAdapter } from './book.store';

import {
  BookActions,
  LOAD_BOOKS,
  UPDATE_BOOK,
  CREATE_BOOK
} from './book.actions';

export function booksReducer(
  state = initialState,
  action: BookActions
): IBookState {
  switch (action.type) {
    case LOAD_BOOKS:
      return bookAdapter.addAll(action.books, state);
    case UPDATE_BOOK:
      return bookAdapter.upsertOne(action.book, state);
    case CREATE_BOOK:
      return bookAdapter.upsertOne(action.book, state);
    default: {
      return state;
    }
  }
}
