import React, { Component } from 'react';
import LanguageContext from 'contexts/LanguageContext';

import UserCreate from 'components/UserCreate';

class App extends Component {
  state = { language: 'english '};

  onLanguageChange = language => this.setState({ language });
  
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
        {/* here we put value that we want to put in the context object */}
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
