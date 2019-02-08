import React from 'react'
import { mount } from 'enzyme'

import Root from 'Root'
import CommentBox from 'components/CommentBox'

let wrapper

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => {
  wrapper.unmount()
})

it('has a textarea and 2 buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(2)
})

describe('textarea', () => {
  beforeEach(() => {
    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } })
    wrapper.update()
  })

  it('has a textarea that a user can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
  })

  it('empties out textarea after form submission', () => {
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })
})
