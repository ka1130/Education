import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  // intercept any request that axios tries to issue - turn off any requests made by axios
  moxios.install();
  // then get data and trick axios into thinking that it's got a response
  // in the second argument we customize handling the request
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #1' }]
  })
});

afterEach(() => {
  moxios.uninstall();
});

it('fetches a list of comments and displays them', (done) => {
  const wrapper = mount(<Root><App /></Root>);
  wrapper.find('.fetch-comments').simulate('click');
  // introduce a little pause for fetching
  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);
    done();
    wrapper.unmount();
  }, 100);
});
