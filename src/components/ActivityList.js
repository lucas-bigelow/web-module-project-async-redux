import React from 'react';
import { connect } from 'react-redux';

const AcivityList = props => {
  return (
    <h1>BOISJOEIJF</h1>
  )
}

const mapStateToProps = state => {
  return { activities: state.activities };
}

export default connect(mapStateToProps, {})(AcivityList);