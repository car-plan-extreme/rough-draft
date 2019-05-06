import React from 'react';
import ReactTable from 'react-table';

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
                  accessor: "status_id",
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}

export default PartList;
