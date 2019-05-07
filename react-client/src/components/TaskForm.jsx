import React from 'react';

class TaskForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="task-form">
        <form action="/task" method="POST" target="hiddenFrame">
          <label>
            Car id:
            <input type="text" name="car_id" required />
          </label>
          <label>
            Task: 
            <input type="text" name="task" required />
          </label>
          <label>
            Due Date:
            <input type="date" name="due_date" />
          </label>
          <label>
            Ongoing:
            <input type="checkbox" name="ongoing" />
          </label>
          <label>
            Details: (Optional)
            <input type="number" name="details" />
          </label>
          <label>
            Status:
            <select name="status_id">
              <option value="1">Complete</option>
              <option value="2">Pending</option>
              <option value="3">Missing Parts</option>
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default TaskForm;
