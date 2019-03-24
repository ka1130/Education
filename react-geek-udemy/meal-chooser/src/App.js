import React, { Component } from "react";
import EnhancedCheckboxGroup from "./components/EnhancedCheckboxGroup";
import "./App.css";
import data from "./data";

class App extends Component {
  state = {
    main: "",
    side1: "",
    side2: "",
    dbl: false
  };

  renderMealInfo() {
    const { main, side1, side2, dbl } = this.state;
    if (main && side1 && side2) {
      return `Your meal for today: ${main} with ${side1} and ${side2} 
      ${dbl ? "(double portion)" : ""}`;
    }
  }

  onMealSelect = (item, dataEntry) => {
    if (this.state[dataEntry[0]] === item.value) {
      this.setState({ [dataEntry[0]]: "" });
    } else {
      this.setState({
        [dataEntry[0]]: item.value
      });
    }
  };

  render() {
    return (
      <main>
        <h3>Monday</h3>
        <p className="prompt">
          Choose one item from each column to see your meal info
        </p>
        <p className="meal-info">{this.renderMealInfo()}</p>
        <div className="container">
          {Object.entries(data).map((elem, i) => (
            <div className="column" key={i}>
              <h5>{elem[0].toUpperCase()}</h5>
              <EnhancedCheckboxGroup
                items={elem[1]}
                onSelect={selectedItem => this.onMealSelect(selectedItem, elem)}
              />
            </div>
          ))}
        </div>
        <input
          type="checkbox"
          onClick={() => this.setState({ dbl: !this.state.dbl })}
        />
        <label>Double portion</label>
      </main>
    );
  }
}

export default App;
