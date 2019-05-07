import React from 'react';

class CarForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="car-form">
        <form action="/car" method="POST" target="hiddenFrame">
          <label>
            Make: 
            <input type="text" name="make" required />
          </label>
          <label>
            Model:
            <input type="text" name="model" required />
          </label>
          <label>
            Year:
            <input type="number" name="year_produced" min="1885" required />
          </label>
          <label>
            Cost: (Optional)
            <input type="number" name="cost" min="0" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CarForm;
