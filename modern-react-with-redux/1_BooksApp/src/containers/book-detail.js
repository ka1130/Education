import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <h3>Select a book to get started</h3>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <p>Title: {this.props.book.title}</p>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook //because there's activeBook piece of state on the reducers/index.js - combineReducers
  };
}

export default connect(mapStateToProps)(BookDetail);
