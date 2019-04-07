import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import { BrowserRouter, Route } from 'react-router-dom'
import App from 'Components/App'

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={ App} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
)
