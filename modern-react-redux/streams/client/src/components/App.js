import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Header from 'components/Header';
import StreamList from 'components/streams/StreamList';
import StreamCreate from 'components/streams/StreamCreate';
import StreamEdit from 'components/streams/StreamEdit';
import StreamDelete from 'components/streams/StreamDelete';
import StreamShow from 'components/streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/show/:id" component={StreamShow} />
        </>
      </Router>
    </div>
  );
};

export default App;