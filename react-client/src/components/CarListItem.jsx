import React from 'react';

const CarListItem = (props) => (
  <div className="car-list-item">
    {props.name || `${props.year} ${props.make} ${props.model}`}
  </div>
);

export default CarListItem;