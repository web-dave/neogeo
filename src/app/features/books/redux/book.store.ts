import { IBook } from '../services/Ibook';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export const bookfeaturename = 'bookstate';

export const bookAdapter = createEntityAdapter<IBook>({
  selectId: book => book.isbn
});

export interface IBookState extends EntityState<IBook> {}

export const initialState = bookAdapter.getInitialState();

const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = bookAdapter.getSelectors();

export const getBooks = createSelector(
  createFeatureSelector(bookfeaturename),
  selectAll
);
export const getBookEntities = createSelector(
  createFeatureSelector(bookfeaturename),
  selectEntities
);
