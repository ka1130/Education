import React, { Component } from 'react';
import Description from './Description';

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

  render() {
    return (
      <div>
          <h1>List of Gists</h1>
          <Description />
          <Description />
      </div>
      );
  }
}

export default DescriptionList;
