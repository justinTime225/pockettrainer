import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../style.css';

/* Action creators */
import { getChestExercises } from '../actions/basicWorkouts.action.js';
import { getBicepExercises } from '../actions/basicWorkouts.action.js';

class App extends Component {
  componentWillMount() {
    // console.log(this.props.basicWorkout);
    this.props.getBicepExercises().then(function() {
      console.log('done', this.props.basicWorkout);
    }.bind(this));
  }
  render() {
    return (
      <div className={styles.app}>
        bar
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    basicWorkout: state.basicWorkout.list
  };
}

export default connect(mapStateToProps, {getChestExercises, getBicepExercises})(App);
