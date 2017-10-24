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

  removeItem = (id) => {
    console.log("Removing item");
  }

  render() {
    return (
      <div>
        <Form />
        <Table
          items={this.state.items}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
