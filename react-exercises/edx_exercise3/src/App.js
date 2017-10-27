import React from 'react';
import './App.css';

import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items:
        [
          {
            firstName: "",
            lastName: "",
            activity: "Science Lab",
            dietaryRestrictions: false,
            physicalDisabilities: false,
            medicalNeeds: false,
            restrictions: {
              "a": false,
              "b": false,
              "c": false
            }
          },
        ]
    }
  }

  addItem = (item) => {
    this.setState({items: [...this.state.items, item]});
  }

  removeItem = (event) => {
    let items = [...this.state.items];
    const itemToRemove = parseInt(event.target.id, 10);
    items = items.filter((item, index) => index !== itemToRemove);
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <Form addItem={this.addItem}/>
        <Table
          items={this.state.items}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
