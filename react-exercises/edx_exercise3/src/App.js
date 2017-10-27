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

  removeItem = (event) => {
    console.log("removing item", event.target.id);
    //this.state.items[event.target.id: this is the element to be removed from this.state.items
    //assign it to a variable and remove from the items array
    let items = [...this.state.items];
    const itemToRemove = parseInt(event.target.id);
    // console.log(items[itemToRemove]);
    console.log(items, itemToRemove);
    items = items.filter((item, index) => index !== itemToRemove);
    console.log(`newArray = ${items}`);
    this.setState({ items });
    // console.log(itemToRemove);
    // const itemsCopy = [...this.state.items];
    // this.setState({items: itemsCopy});
  }

  render() {
    console.log(this.state.items);
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
