import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getRandomActivity } from '../../actions';

const RandomButton = props => {
  const getNewActivity = e => {
    e.preventDefault();
    props.getRandomActivity();
  }

  return (
    <button onClick={getNewActivity} className="button" type="button">Get a new random activity!</button>
  )
}

export default connect(null, { getRandomActivity })(RandomButton);