import React, {Component} from 'react';
import PropTypes from 'prop-types';

function FollowedMerchant (props) {
    var followingMerchants = ['Chanel', 'Valentino', 'Dior', 'Tom Ford', 'Hermes'];
    return(
      <ul className='merchants'>
        {followingMerchants.map(function (merchant) {
            return (
                <li
                style= {merchant === props.followedMerchant ? {color: '#1F8A70'}: null}
                key={merchant}
                onClick ={props.onSelect.bind(null, merchant)}
                >
                {merchant}
                </li>
            )
        })}
      </ul>
    )
}
FollowedMerchant.propTypes = {
  followedMerchant: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Merchant extends Component {
   
    constructor (props) {
    super(props);
    this.state = {
      followedMerchant : 'Valentino'
    };

    this.updateMerchant = this.updateMerchant.bind(this);
  }
  updateMerchant(merchant) {
    this.setState(function() {
      return {
        followedMerchant: merchant
      }
    });
  }

  render() {
  	// var followedList = this.props.list.filter(function (merchant) {
  	// 	return merchant.follow === true;
  	// });

  	// var unfollowedList = this.props.list.filter(function (merchant) {
  	// 	return merchant.follow !== true;
  	// });
    return (
      <div>
       <h3>Followed Merchants</h3>
        <FollowedMerchant
          followedMerchant = {this.state.followedMerchant}
          onSelect={this.updateMerchant}
        />
      </div>
    )
  }
}

// Merchant.propTypes = {
// 	list: PropTypes.arrayOf(PropTypes.shape({
// 		name: PropTypes.string.isRequired,
// 		friend: PropTypes.bool.isRequired,
// 	})),
// }

export default Merchant;