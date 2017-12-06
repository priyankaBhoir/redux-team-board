import React, {Component} from 'react';
// import Styles from './Home.css';
import './Home.css';

export class Home extends Component {
  render() {
    console.log("home")
    return (
      <div className='home'>
        <h3> Welcome! </h3>
      </div>
    )
  }
}

export default Home;