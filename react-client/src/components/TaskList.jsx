import React from 'react';
import ReactTable from 'react-table';

import TaskForm from './TaskForm.jsx';

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
                  accessor: "car",
                },
                {
                  Header: "Task",
                  accessor: "task",
                },
                {
                  Header: "Due Date",
                  accessor: "due_date",
                },
                {
                  Header: "Status",
                  accessor: "status",
                }
              ]
            }
          ]}
        />
        <TaskForm />
      </div>
    );
  }
}

export default TaskList;
