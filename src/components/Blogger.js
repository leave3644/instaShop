import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Blogger extends Component {
  render() {
    var followedList = this.props.list.filter(function (blogger) {
        return blogger.follow === true;
    });

    var unfollowedList = this.props.list.filter(function (blogger) {
        return blogger.follow !== true;
    });
    return (
      <div>
        <h1>Followed Accounts</h1>
        <ul>
            {followedList.map(function(blogger) {
             return (
                <li key={blogger.name}>
                {blogger.name}</li>
                )
            })}        
        </ul>
        
        <hr />
        
        <h1>Non followed accounts</h1>
        <ul>
            {unfollowedList.map(function(blogger) {
             return (
                <li key={blogger.name}>
                {blogger.name}
                </li>
                )
            })}            
         </ul>        
      </div>
    )
  }
}

Blogger.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        friend: PropTypes.bool.isRequired,
    })),
}

export default Blogger;