import React, { Component } from 'react';
import Description from './Description';
import axios from 'axios';

class DescriptionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gists: [],
    }
  }

  componentDidMount() {
    axios.get(`https://private-anon-24e65964bb-awapp.apiary-mock.com/gists`)
      .then(result => {
        const gists = result.data._embedded.gists.map(gist => gist);
        console.log(gists);
        this.setState({ gists });
      });
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
            />
          )}
      </div>
      );
  }
}

export default DescriptionList;
