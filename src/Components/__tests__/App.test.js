import React from 'react'
import { shallow } from 'enzyme'
import App from 'Components/App'
import CommentBox from 'Components/CommentBox'
import CommentList from 'Components/CommentList'

let wrapped

// prevents redundancies 
beforeEach(() => {
   wrapped = shallow(<App />)
})

it('shows comment box', () => {
  // faking out the browser
//  const div = document.createElement('div')
  // ^ not a real div
  // create a new div
//  ReactDOM.render(<App />, div)
  // render App into a div
  // You can write code that looks insides code to see if CommentBox is in there
  // expect(div.innerHTML).toContain('Comment Box')
//  ReactDOM.unmountComponentAtNode(div)
  // looks at div, finds app and remove the app component
  // essentially it is cleanup
  // should know the difference when to cleanup code or when to just let it be
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
