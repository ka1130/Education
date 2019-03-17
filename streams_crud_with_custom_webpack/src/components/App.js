import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "components/Header";
import StreamCreate from "components/streams/StreamCreate";
import StreamEdit from "components/streams/StreamEdit";
import StreamDelete from "components/streams/StreamDelete";
import StreamList from "components/streams/StreamList";
import StreamShow from "components/streams/StreamShow";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/show" component={StreamShow} />
        <Route path="/streams/delete" component={StreamDelete} />
      </BrowserRouter>
    </div>
  );
};

export default App;
