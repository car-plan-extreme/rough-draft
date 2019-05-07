import React from 'react';
import ReactTable from 'react-table';

import PartForm from './PartForm.jsx';

class PartList extends React.Component {
  render() {
    return (
      <div className="part-list">
        <ReactTable 
          data={this.props.parts}
          defaultPageSize={5}
          columns={[
            {
              Header: "Parts",
              columns: [
                {
                  Header: "Part",
                  accessor: "part",
                }, 
                {
                  Header: "Cost",
                  accessor: "cost",
                },
                {
                  Header: "Status",
                  accessor: "status",
                }
              ]
            }
          ]}
        />
        <PartForm />
      </div>
    );
  }
}

export default PartList;
