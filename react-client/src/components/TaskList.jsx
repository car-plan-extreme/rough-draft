import React from 'react';
import ReactTable from 'react-table';

class TaskList extends React.PureComponent {
  render() {
    return (
      <div className="task-list">
        <ReactTable 
          data={this.props.tasks}
          defaultPageSize={5}
          columns={[
            {
              Header: "Tasks",
              columns: [
                {
                  Header: "Car",
                  accessor: "car_id",
                },
                {
                  Header: "Due Date",
                  accessor: "due_date",
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

export default TaskList;
