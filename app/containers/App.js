import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../style.css';
import Reactable from 'reactable';

/* Action creators */
import { getChestExercises } from '../actions/basicWorkouts.action.js';
import { getBicepExercises } from '../actions/basicWorkouts.action.js';

const Table = Reactable.Table;

class App extends Component {
  componentWillMount() {
    // console.log(this.props.basicWorkout);
    this.props.getBicepExercises().then(function() {
      console.log('done', this.props.basicWorkout);
    }.bind(this));
  }
  render() {
    if (!this.props.basicWorkout) {
      return <div>Loading...</div>
    }
    return (
      <div className={styles.app}>
        <Table className="table" data={this.props.basicWorkout} />
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
