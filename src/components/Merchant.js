import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Merchant extends Component {
  render() {
  	var followedList = this.props.list.filter(function (merchant) {
  		return merchant.follow === true;
  	});

  	var unfollowedList = this.props.list.filter(function (merchant) {
  		return merchant.follow !== true;
  	});
    return (
      <div>
        <h1>Followed Accounts</h1>
        <ul>
			{followedList.map(function(merchant) {
			 return (
			 	<li key={merchant.name}>
			 	{merchant.name}</li>
			 	)
			})}        
		</ul>
        
        <hr />
        
        <h1>Non followed accounts</h1>
        <ul>
			{unfollowedList.map(function(merchant) {
			 return (
			 	<li key={merchant.name}>
			 	{merchant.name}
			 	</li>
			 	)
			})}            
		 </ul>        
      </div>
    )
  }
}

Merchant.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		friend: PropTypes.bool.isRequired,
	})),
}

export default Merchant;