import React, { Component } from 'react';
import Description from './Description';
import axios from 'axios';

const gists = [
  {
    id: 1,
    description: 'Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Quam ob rem tandem, inquit, non satisfacit? Nunc omni virtuti vitium contrario nomine opponitur.'
  },
  {
    id: 2,
    description: 'Duo Reges: constructio interrete. Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Quia nec honesto quic quam honestius nec turpi turpius. Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Sed haec omittamus;'
  }
];

class DescriptionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gists
    }
  }

  componentDidMount() {
    let date = '2012-04-16T11:16:27.930Z';
    axios.get(`https://private-anon-24e65964bb-awapp.apiary-mock.com/gists?since=${date}.json`)
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
          {this.state.gists.map(gist => {
            return (
              <Description key={gist.id} id={gist.id} description={gist.description}/>
              );
          })}
      </div>
      );
  }
}

export default DescriptionList;
