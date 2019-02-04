import React, { Component } from 'react';
import LanguageContext from 'contexts/LanguageContext';
import ColorContext from 'contexts/ColorContext';

class Button extends Component {
  static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui ${color} button`}>
        {this.context.language === 'english' ? 'Submit' : 'Voorleggen'}
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
          {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
/* 
  child/function passed to the Consumer, it will be called 
  with whatever current values is inside of the pipe;
  we can only use a Consumer here, as opposed to this.context
  because the Button component consumes data from more than one context/Provider
*/

export default Button;
