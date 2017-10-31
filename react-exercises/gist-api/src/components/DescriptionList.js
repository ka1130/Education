import React, { Component } from 'react';

import Description from './Description';
import AddForm from './AddForm';
import axios from 'axios';

class DescriptionList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      gists: [],
      addingGist: false,
    }
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
    axios.get(`https://private-anon-8502f36fff-awapp.apiary-mock.com/gists/${id}`)
      .then(result => {
        console.log(result.data);
      });
    this.context.router.transitionTo(`/overview/${id}`);
  }

  openAddForm = () => {
    console.log("adding gist form open");
    this.setState({ addingGist: true });
  }

  addGist = () => {
    console.log("gist has been added");
    this.setState({ addingGist: false });
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
        <button className="button button-add" onClick={this.openAddForm}>Add New Gist</button>
        <AddForm addingGist={this.state.addingGist} handleSubmit={this.addGist}/>
      </div>
    );
  }
}

DescriptionList.contextTypes = {
  router: React.PropTypes.object
};

export default DescriptionList;
