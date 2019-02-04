import React, { Component } from 'react';
import LanguageContext from 'contexts/LanguageContext';

class Button extends Component {
  render() {
    return (
      <button className="ui primary button">
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
          {/* 
            child/function passed to the Consumer, it will be called 
            with whatever current values is inside of the pipe 
          */}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
