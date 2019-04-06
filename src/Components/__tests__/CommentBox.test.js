import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'Components/CommentBox'
import Root from 'Root'

let wrapped

beforeEach( () => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach( () => {
  wrapped.unmount()
})

describe('the text area', () => {
  beforeEach( () => {
    wrapped.find('textarea').simulate('change', {
      // callback recieves state of new comment
      target: { value: 'new comment' }
    })
    wrapped.update()
  })

  it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
  })

  it('has a text area that a user can type in', () => {
    // find it then simulate a onChange prevent
    // use real html name of event - not react

    // tell the component to rerender
    // wrapped.update()
    // we want to make sure it passes in the correct value prop
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('clears out the input after submit', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
