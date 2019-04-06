import React from 'react'
import { mount } from 'enzyme'

import CommentList from 'Components/CommentList'
import Root from 'root'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: [ 'Comment 1', 'Comment 2' ],
  }
  wrapped = mount(
    <Root initialState={ initialState }>
      <CommentList />
    </Root>
  )
})

it('creates one li per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows text for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 2')
})
