import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

//Stateless functional component, with no 'this'
function SelectedCategory (props) {
  var followingCategories = ['All', 'Cloth', 'Beauty', 'SkinCare', 'Bag', 'Shoes'];
  return (
    <ul className='categories'>
      {followingCategories.map(function (category) {
        //console.log(this, 'Down here!'); //undefined
        return (
              <li 
              style = {category === props.selectedCategory ? {color: '#0971B2'}: null}
              key={category} 
              onClick ={props.onSelect.bind(null, category)}>
              {category}
              </li>
            )
          })}
    </ul>
  )
}

function UserGrid (props) {
  return (
     <ul className="following-list">
         {props.accounts.map(function (account, index) {
            <li key={account.name} className='following-list'>
              <div className="following-likes">#{index + 1}</div>
              <ul className="space-list-itmes">
                <li>
                  <img
                    className='avatar'
                    src={account.username.profilePic_url}
                    alt={Avator for + account.username.login} 
                  />
                </li>
                <li><a href={account.profile_url}>{account.username} </a></li>
                <li>@{account.username.login}</li>
                <li>Followers {account.username.followers}</li>
              </ul>
            </li>
         })}
     </ul>
    )
}

UserGrid.propTypes {

}

SelectedCategory.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

//lifecycle events

class Followings extends Component {
  constructor (props) {
    super();
    this.state = {
      selectedCategory : 'All',
      accounts: null
    };

    this.updateCategory = this.updateCategory.bind(this);
  }

  componentDidMount () {
    // Ajax request
    this.updateCategory(this.state.selectedCategory);
  }
  updateCategory(category) {
    this.setState(function() {
      return {
        selectedCategory: category,
        accounts: null
      }
    });

    api.fetcheFollowingLists(category)
      .then(function(accounts) {
        this.setState(function () {
          return {
            accounts: accounts
          }
        });
    }.bind(this));
  }
	render() {
		//console.log(this, 'Up here!') //object
    return (
		  <div>
       <SelectedCategory 
         selectedCategory={this.state.selectedCategory}
         onSelect={this.updateCategory}
       />
       {!this.state.accounts
         ? <p>Loading</p>
         : <UserGrid accounts={this.state.accounts} />
         }
       // {JSON.stringify(this.state.accounts, null, 2)}
       
      </div>
    )
	}
}   

export default Followings;