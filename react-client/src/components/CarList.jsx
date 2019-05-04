import React from 'react';
import CarListItem from './CarListItem.jsx';

class CarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'date-added',
    }
  }

  render() {
    return (
      <div className="car-list">
        <div className="sort-by">
          <p> Sort by: </p> 
          <select>
            <option value="date-added">Date Added</option>
            <option value="cost-low">Cost: Low to High</option>
            <option value="cost-high">Cost: High to Low</option>
            <option value="year-low">Year: Newest to Oldest</option>
            <option value="year-high">Year: Oldest to Newest</option>
            <option value="make">Make</option>
          </select>
        </div>
        <div className="car-list-items">
          {this.props.cars.forEach((car) => <CarListItem car={car}/>)}
        </div>
      </div>
    )
  }
}

export default CarList;