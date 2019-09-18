import { initialState, IBookState } from './book.store';

import { BookActions, LOAD_BOOKS } from './book.actions';

export function booksReducer(
  state = initialState,
  action?: BookActions
): IBookState {
  console.log(state, action);
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        booklist: action.books
      };
    default: {
      return state;
    }
  }
}
