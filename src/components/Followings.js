import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

SelectedCategory.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Followings extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedCategory : 'All'
    };

    this.updateCategory = this.updateCategory.bind(this);
  }
  updateCategory(category) {
    this.setState(function() {
      return {
        selectedCategory: category
      }
    });
  }
	render() {
		//console.log(this, 'Up here!') //object
    return (
		  <div>
       <SelectedCategory 
         selectedCategory={this.state.selectedCategory}
         onSelect={this.updateCategory}
       />
      </div>
    )
	}
}   

export default Followings;