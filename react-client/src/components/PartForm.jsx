import React from 'react';

class PartForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="part-form">
        <form action="/part" method="POST" target="hiddenFrame">
          <label>
            Part: 
            <input type="text" name="part" required />
          </label>
          <label>
            Date Purchased:
            <input type="date" name="date_bought" />
          </label>
          <label>
            Cost:
            <input type="number" name="cost" min="0"/>
          </label>
          <label>
            Status:
            <select name="status_id">
              <option value="1">Obtained</option>
              <option value="2">Pending</option>
              <option value="3">Used</option>
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PartForm;
