import React, { Component } from 'react';

import Description from './Description';
import axios from 'axios';

class DescriptionList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      gists: [],
    }
  }

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  componentDidMount() {
    axios.get(`https://private-anon-8502f36fff-awapp.apiary-mock.com/gists`)
      .then(result => {
        const gists = result.data._embedded.gists;
        console.log(gists);
        this.setState({ gists });
    });
  }

  showGist = event => {
    const id = event.target.id;
    console.log(id);
    axios.get(`https://private-anon-8502f36fff-awapp.apiary-mock.com/gists/${id}`)
      .then(result => {
        console.log(result.data);
      });
    console.log("going to the single gist view");
    this.context.router.transitionTo(`/ovierview/${id}`);
    console.log(this.context);
  }

  addGist = () => {
    console.log("gist added");
  }

  render() {
    return (
      <div>
        <h1>List of Gists</h1>
        {this.state.gists.map(gist =>
          <Description
            key={gist.id}
            id={gist.id}
            description={gist.description}
            showGist={event => this.showGist(event)}
          />
        )}
      </div>
    );
  }
}

export default DescriptionList;
