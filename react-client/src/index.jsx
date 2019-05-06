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
      cars: [
        {
          car_id: 1,
          name: null,
          make: 'Mazda',
          model: 'Mazda 3',
          year: 2017,
          color: null,
          cost: null,
        },
        {
          car_id: 2,
          name: null,
          make: 'Mazda',
          model: 'MX-5 Miata',
          year: 2002,
          color: null,
          cost: null,
        }
      ],
      tasks: [
        {
          task_id: 1,
          car: 'Mazda 3',
          task: 'Change oil',
          due_date: null,
          ongoing: true,
          parts_needed: [],
          details: '',
          status: 'Complete'
        }
      ],
      parts: [
        {
          part_id: 1,
          name: 'Oil filter',
          date_bought: null,
          cost: 7,
          status: 'Used',
        }
      ]
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