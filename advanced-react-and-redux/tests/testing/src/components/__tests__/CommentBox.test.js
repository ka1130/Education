import React from 'react';
import { mount } from 'enzyme'; // we could use shallow here, mount is just for learning purposes
import CommentBox from 'components/CommentBox';

let wrapper;

it('has a textarea and a button', () => {
  wrapper = mount(<CommentBox />);
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(1);
});
