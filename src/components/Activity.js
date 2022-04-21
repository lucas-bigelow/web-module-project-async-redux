import React from 'react';

import './App.css';

const Activity = (props) => {

  return (
    <div className="activity">
      <h2>{props.activity.activity}</h2>
      <p>{props.activity.type.toUpperCase()}</p>
      <p>Number of people needed: {props.activity.participants}</p>
      <p>Estimated cost: $ {props.activity.price}</p>
    </div>
  )
}

export default Activity;