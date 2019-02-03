import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from 'components/Header';
import StreamList from 'components/streams/StreamList';
import StreamCreate from 'components/streams/StreamCreate';
import StreamEdit from 'components/streams/StreamEdit';
import StreamDelete from 'components/streams/StreamDelete';
import StreamShow from 'components/streams/StreamShow';

const App = () => {
  return (
    <div className="ui-container">
      <BrowserRouter>
        <>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/new" render={() => <StreamCreate />} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;