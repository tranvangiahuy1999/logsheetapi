import {ADD_ITEM} from '../constants/index';

let itemId = 0;

export const addItem = text => ({
  type: ADD_ITEM,
  id: itemId++,
  text: text,
});
