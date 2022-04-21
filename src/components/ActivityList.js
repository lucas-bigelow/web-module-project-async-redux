import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Activity from './Activity';
import { getRandomActivity } from '../../actions';

const AcivityList = props => {
  useEffect(() => {
    props.getRandomActivity()
  }, []);

  return (
    props.activities.map(activity => {
      return <Activity key={activity.key} activity={activity} />
    })
  )
}

const mapStateToProps = state => {
  return { activities: state.activities };
}

export default connect(mapStateToProps, {getRandomActivity})(AcivityList);