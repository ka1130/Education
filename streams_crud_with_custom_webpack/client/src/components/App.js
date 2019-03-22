import React from "react";
import { Router, Route } from "react-router-dom";
import { history } from "customHistory";

import Header from "components/Header";
import StreamCreate from "components/streams/StreamCreate";
import StreamEdit from "components/streams/StreamEdit";
import StreamDelete from "components/streams/StreamDelete";
import StreamList from "components/streams/StreamList";
import StreamShow from "components/streams/StreamShow";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route exact path="/" component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/show" component={StreamShow} />
        <Route path="/streams/delete" component={StreamDelete} />
      </Router>
    </div>
  );
};

export default App;
