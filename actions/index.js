import axios from 'axios';

import { GET_RANDOM_ACTIVITY } from "./action-types";

const URL = "http://www.boredapi.com/api/activity/";

export const getRandomActivity = () => dispatch => {
  axios.get(URL)
    .then(res => console.log(res.data));
  // return {
  //   type: GET_RANDOM_ACTIVITY
  // }
}