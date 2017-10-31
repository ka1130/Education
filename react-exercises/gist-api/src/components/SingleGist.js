import React, { Component } from 'react';
import axios from 'axios';

class SingleGist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      content: "",
      created: "",
      desc: "",
    }
  }

  componentDidMount() {
    const id = 42;
    axios.get(`https://private-anon-8502f36fff-awapp.apiary-mock.com/gists/${id}`)
      .then(result => {
        console.log(result);
        this.setState({
          id: result.data.id,
          content: result.data.content,
          created: result.data.created_at,
          desc: result.data.description,
        })
      })
      .catch(error => {
        console.err(error);
      });
  }

  editGist = event => {
    const id = this.state.id;
    console.log(`editing gist no ${id}`);
  }

  deleteGist = event => {
    const id = this.state.id;
    console.log(`deleting gist no ${id}`);
    axios.delete(`https://private-anon-8502f36fff-awapp.apiary-mock.com/gists/${id}`)
      .then(result => {
        console.log(result);
      });
  }

  goToOverview = () => {
    this.context.router.transitionTo('/');
  }

  render() {
    const {id, content, created, dec} = this.state.id;

    return (
      <div className="description gist-description">
        <h4 className="gist-header">{this.state.desc}</h4>
        <h6 className="gist-date">Created at {this.state.created}</h6>
        <p><strong>Gist No {this.state.id}</strong>: {this.state.content}</p>
        <div className="button-group">
          <button className="button button-edit" onClick={this.editGist}>Edit</button>
          <button className="button button-delete" onClick={this.deleteGist}>Delete</button>
        </div>
        <button className="button button-overview" onClick={this.goToOverview}>Back to Gist Overview</button>
      </div>
    );
  }

}

SingleGist.contextTypes = {
  router: React.PropTypes.object
};

export default SingleGist;
