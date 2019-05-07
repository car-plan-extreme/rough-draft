import React from 'react';
import ReactTable from 'react-table';

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
                  Header: "Id",
                  accessor: "id"
                },
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
        <CarForm />
      </div>
    )
  }
}

export default CarList;