import { combineReducers } from "redux";
import * as actions from '../actions/action-types';

// const reducer = combineReducers({});

// "activity": "Learn Express.js",
// "accessibility": 0.25,
// "type": "education",
// "participants": 1,
// "price": 0.1,
// "link": "https://expressjs.com/",
// "key": "3943506"

const initialState = {
  activities: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_RANDOM_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload]
      }
    default:
      return state;
  }
}

export default reducer;