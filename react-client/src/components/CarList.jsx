import React from 'react';
import ReactTable from 'react-table';

import CarListItem from './CarListItem.jsx';
import CarForm from './CarForm.jsx';

class CarList extends React.PureComponent {
  render() {
    return (
      <div className="car-list">
        <ReactTable 
          data={this.props.cars}
          defaultPageSize={5}
          columns={[
            {
              Header: "Cars",
              columns: [
                {
                  Header: "Make",
                  accessor: "make",
                },
                {
                  Header: "Model",
                  accessor: "model",
                },
                {
                  Header: "Year",
                  accessor: "year_produced",
                },
                {
                  Header: "Cost",
                  accessor: "cost",
                }
              ]
            }
          ]}
        />
      </div>
    )
  }
}

export default CarList;