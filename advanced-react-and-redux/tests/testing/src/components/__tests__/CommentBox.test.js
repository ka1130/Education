import React from 'react';
import { mount } from 'enzyme'; // we could use shallow here, mount is just for learning purposes
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('has a textarea and two buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('textarea', () => {
  beforeEach(() => {
      /* 
        this second argument to the 'simulate' fn, the 'mock', is an object that gets merged
        into the real event object that gets passed to our event handler
        so i gets merged into the event object
      */
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    /*
      now we need to rerender the component, the same way as it happens when we call setState()
      but when we're calling setState, the component rerenders asynchronously
      so when setState is called within the handleChange() fn it does not immediately rerender the component
      but in this test we want to immediately see the change that was made after the setState() call
      so we need to force the component's update
    */
    wrapper.update();
  });

  it('has a textarea that users can type in', () => {
   // check that the textarea receives the correct value prop => value prop rather than simply value on textarea
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
  });
  
  it('clears textarea after form submission', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
