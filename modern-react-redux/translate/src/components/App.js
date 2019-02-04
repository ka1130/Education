import React, { Component } from 'react';
import { LanguageStore } from 'contexts/LanguageContext';
import ColorContext from 'contexts/ColorContext';

import LanguageSelector from "components/LanguageSelector";
import UserCreate from 'components/UserCreate';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector/>
          <ColorContext.Provider value="red">
            {/* here we put value that we want to put in the context object */}
              <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
