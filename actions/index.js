import axios from 'axios';

import { ADD_ACTIVITY } from "./action-types";

const URL = "http://www.boredapi.com/api/activity/";

export const getRandomActivity = () => dispatch => {
  axios.get(URL)
    .then(res => {
      console.log(res.data)
      dispatch({ type: ADD_ACTIVITY, payload: res.data })
    })
    .catch(err => {
      debugger
    })
}