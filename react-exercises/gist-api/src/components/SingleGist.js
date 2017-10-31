import React, { Component } from 'react';
import EditForm from './EditForm';
import EditGroup from './EditGroup';
import axios from 'axios';

class SingleGist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      content: "",
      created: "",
      desc: "",
      isEdited: false,
      starred: false,
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

  starGist = () => {
    const starred = this.state.starred;
    if(starred) {
      this.setState({ starred: false });
    } else {
      this.setState({ starred: true });
    }
    console.log(`gist starred: ${starred}`);
  }

  editGist = () => {
    const id = this.state.id;
    console.log(`editing gist no ${id}`);
    this.setState({
      isEdited: true,
    });
  }

  deleteGist = () => {
    var isSure = window.confirm("Are you sure you want to delete this gist?");
    if(isSure) {
      const id = this.state.id;
      console.log(`deleting gist no ${id}`);
      axios.delete(`https://private-anon-8502f36fff-awapp.apiary-mock.com/gists/${id}`)
        .then(result => {
          console.log(result);
        });
    }
  }

  contentChange = event => {
    const content = event.target.value;
    this.setState({ content });
  }

  descChange = event => {
    const desc = event.target.value;
    this.setState({ desc });
  }

  submitEdit = () => {
    console.log("edited gist has been submitted");
    this.setState({
      isEdited: false,
    });
  }

  goToOverview = () => {
    this.context.router.transitionTo('/');
  }

  render() {
    const {id, content, created, desc, isEdited} = this.state;

    return (
      <div className="description gist-description">
        <h4 className="gist-header">{desc}</h4>
        <h6 className="gist-date">Created at {created}</h6>
        <p>
          <strong>Gist No {id}</strong>
          : {content}
          <i className="fa fa-star-o star-icon" aria-hidden="true" onClick={this.starGist}></i>
        </p>
        <EditGroup editGist={this.editGist} deleteGist={this.deleteGist} isEdited={isEdited}/>
        <EditForm
          content={content}
          desc={desc}
          isEdited={isEdited}
          contentChange={this.contentChange}
          descChange={this.descChange}
          submitEdit={this.submitEdit}
        />
        <button className="button button-overview" onClick={this.goToOverview}>Back to Gist Overview</button>
      </div>
    );
  }

}

SingleGist.contextTypes = {
  router: React.PropTypes.object
};

export default SingleGist;
