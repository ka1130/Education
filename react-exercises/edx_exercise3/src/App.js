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
            restrictions: "a b c",
            dietaryRestrictions: false,
            physicalDisabilities: false,
            medicalNeeds: false,
          },
        ]
    }
  }

  addItem = (item) => {
    this.setState({items: [...this.state.items, item]});
  }

  removeItem = (index) => {
    const itemsCopy = [...this.state.items];
    itemsCopy.splice(index, 1);
    this.setState({items: itemsCopy});
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
