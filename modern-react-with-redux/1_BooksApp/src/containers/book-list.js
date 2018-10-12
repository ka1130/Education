import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; //import our action creator
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key="book-title" className="list-group-item" onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
    // this will be a prop on BookList component
  }
}

// Anything returned from this function will end up as props on the BookList container
// so now we can call this.props.selectBook
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers - this is done by bindAction by this dispatch
  // dispatch takes all these actions, receives them like a funnel and spits them back to all of the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  // this selectBook value is the action creator we imported at the top
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
