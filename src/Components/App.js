import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'actions'

import CommentBox from 'Components/CommentBox'
import CommentList from 'Components/CommentList'

class App extends React.Component {
  renderButton(){
    if (this.props.auth) {
      return (
        <button onClick={ () => this.props.changeAuth(false)}>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={ () => this.props.changeAuth(true)}>
          Sign In
        </button>
      )
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>
          <Link to="/">{ this.renderButton() }</Link>
        </li>
      </ul>
    )
  }
  render() {
    return (
      <div>
        { this.renderHeader() }
        <Route path="/post" component={ CommentBox } />
        <Route path="/" exact component={ CommentList } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(App)
