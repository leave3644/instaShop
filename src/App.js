import React, {Component} from 'react';
import './App.css';
import logo from './logo.png';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>InstaShop</h2>
        </div>
        <p className="App-intro">
          <Avatar img={this.props.user.img} />
          <Label name={this.props.user.name} />
          <ScreenName username={this.props.user.username} />
        </p>
      </div>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.name}</h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username}</h3>
    )
  }
}

App.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default App;