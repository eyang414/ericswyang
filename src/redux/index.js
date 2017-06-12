//action creator

import store from '../store.js'

const NAME = 'NAME'

const initialState = {name: ''}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME:
      return Object.assign({}, state, {name: action.name})
    default:
      return state;
  }
};

export const nameChange = inputName => ({
  type: NAME,
  name: inputName
});

export const nameInput = (inputName) => (store.dispatch(nameChange(inputName)))

export default reducer;
