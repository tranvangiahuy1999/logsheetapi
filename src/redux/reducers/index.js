import {ADD_ITEM} from '../constants/index';

const reducers = (state = [{id: '-1', text: 'hi there'}], action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return [...state, {id: action.id, text: action.text}];
    }
    default: {
      return state;
    }
  }
};

export default reducers;
