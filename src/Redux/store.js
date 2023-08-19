import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';

import columnsReducer from './columnRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';
import listsReducer from './listsRedux';

export const getAllColumns = state => state.columns;
export const getFilteredCards = ({ cards, searchString }, columnId) =>cards.filter(card => card.columnId === columnId && strContains(card.title, searchString))
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const toggleCardFavorite = cardId => ({ type: 'TOGGLE_CARD_FAVORITE', payload: cardId });
export const updateSearchString = searchString => ({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = (state, listId) => state.columns.filter(column => column.listId === listId);
export const getAllLists = state => state.lists;

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}
  
const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;