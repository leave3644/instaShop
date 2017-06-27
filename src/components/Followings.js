import React, {Component} from 'react';

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
    var followingCategories = ['All', 'Cloth', 'Beauty', 'SkinCare', 'Bag', 'Shoes'];
		//console.log(this, 'Up here!') //object
    return (
		  <div>
      <ul className='categories'>
      {followingCategories.map(function (category) {
        //console.log(this, 'Down here!'); //undefined
        return (
              <li 
              style = {category === this.state.selectedCategory ? {color: '#c0011'}: null}
              key={category} 
              onClick ={this.updateCategory.bind(null, category)}>
              {category}
              </li>
            )
          }, this)}
        </ul>
      </div>
    )
	}
}   

export default Followings;