import React, {Component} from 'react';
import './App.css';

function formatName(user) {
  return 'Hello, ' + user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'John',
  lastName: 'Smith'
}

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    const paragraph = 'This is the first paragraph';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p className="Paragraph">{paragraph}</p>
        <h5>{formatName(user)}</h5>
      </div>
    );
  }
}

export default App;
