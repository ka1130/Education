import React, { Component } from 'react';
import LanguageContext from 'contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;
  // the above has to be named contextType

  render() {
    console.log(this.context);
    return <button className="ui primary button">Submit</button>;
  }
}

export default Button;