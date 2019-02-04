import React, { Component } from 'react';
import LanguageContext from 'contexts/LanguageContext';
import ColorContext from 'contexts/ColorContext';

import LanguageSelector from "components/LanguageSelector";
import UserCreate from 'components/UserCreate';

class App extends Component {
  state = { language: 'english '};

  onLanguageChange = language => this.setState({ language });
  
  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange}/>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
          {/* here we put value that we want to put in the context object */}
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
