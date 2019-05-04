import React from 'react';

class CarForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="car-form">
        <form>
          <label>
            Name: (Optional)
            <input type="text" name="name" value={this.props.name}/>
          </label>
          <label>
            Make: 
            <input type="text" name="make" value={this.props.make} required />
          </label>
          <label>
            Model:
            <input type="text" name="model" value={this.props.model} required />
          </label>
          <label>
            Year:
            <input type="number" name="year" value={this.props.year} min="1885" required />
          </label>
          <label>
            Color: 
            <input type="color" name="color" value={this.props.year} />
          </label>
          <label>
            Cost: (Optional)
            <input type="number" name="cost" value={this.props.year} min="0" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CarForm;
