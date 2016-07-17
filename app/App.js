import React from 'react';
import styles from './App.css';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  componentWillMount() {
    axios.get('/test')
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
