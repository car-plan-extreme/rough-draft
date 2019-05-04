import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CarList from './components/CarList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (<div>
      <CarList cars={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));