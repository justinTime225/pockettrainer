import React, { Component } from 'react';
import styles from '../style.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  componentWillMount() {
    axios.get('/chest')
    .then(function(res) {
      console.log(res);
    });
  }
  render() {
    return (
      <div className={styles.app}>
        bar
      </div>
    );
  }
}
