import React from "react";
import EnhancedCheckbox from "../EnhancedCheckbox";
import "./index.css";

export default class EnhancedCheckboxGroup extends React.Component {
  state = {
    selectedItem: null
  };

  setSelected(selectedItem) {
    this.setState({ selectedItem });
    this.props.onSelect(this.props.items[selectedItem]);
  }

  render() {
    return (
      <div className="enhanced-checkbox-group-container">
        {this.props.items.map((item, i) => (
          <EnhancedCheckbox
            key={i}
            item={item}
            selected={this.state.selectedItem === i}
            onSelect={() => this.setSelected(i)}
          />
        ))}
      </div>
    );
  }
}
