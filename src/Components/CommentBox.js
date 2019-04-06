import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends React.Component {
  state = {
    comment: '',
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
    // Does not immediately invoke - we need to wait for rerender
  }

  handleSubmit = (event) => {
    event.preventDefault()
    /// Call an action creator
    //  And save the commment
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <h4>Add a Comment</h4>
          <textarea
            value={ this.state.comment }
            onChange={ this.handleChange }
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments"
          onClick={ this.props.fetchComments }>Fetch Comment</button>
      </div>
    )
  }
}

export default connect(null, actions) (CommentBox)
