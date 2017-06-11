import React, {Component} from 'react';

class Merchant extends Component {
  render() {
    return (
      <div>
        <h1>Followed Accounts</h1>
        <ul>
			{this.props.list.filter(function(merchant) {
			    return merchant.follow === true
			 }).map(function(merchant) {
			 return <li>{merchant.name}</li>})}        
		</ul>
        
        <hr />
        
        <h1>Non followed accounts</h1>
        <ul>
			{this.props.list.filter(function(merchant) {
			    return merchant.follow !== true
			 }).map(function(merchant) {
			 return <li>{merchant.name}</li>})}            
		 </ul>        
      </div>
    )
  }
}

export default Merchant;