import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter, Route } from 'react-router-dom';

import CarList from './components/CarList.jsx';
import TaskList from './components/TaskList.jsx';
import PartList from './components/PartList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cars: [],
      tasks: [],
      parts: [],
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/cars', 
      success: (data) => {
        this.setState({
          cars: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    $.ajax({
      url: '/tasks', 
      success: (data) => {
        this.setState({
          tasks: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    $.ajax({
      url: '/parts', 
      success: (data) => {
        this.setState({
          parts: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <CarList cars={this.state.cars} />
        <TaskList tasks={this.state.tasks} />
        <PartList parts={this.state.parts} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));