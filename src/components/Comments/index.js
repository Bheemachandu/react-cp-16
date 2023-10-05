import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

console.log(initialContainerBackgroundClassNames)

class Comments extends Component {
  state = {commentList: [], nameInput: '', commentText: ''}

  nameChange = event => {
    this.setState({nameInput: event.target.value})
  }

  commentChange = event => {
    this.setState({commentText: event.target.value})
  }

  submitForm = event => {
    console.log('bheem1')
    event.preventDefault()

    const {nameInput, commentText} = this.state

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentText,
      date: new Date(),
      isLiked: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      commentText: '',
    }))
  }

  render() {
    const {commentList, nameInput, commentText} = this.state
    console.log(commentList)
    return (
      <div className="container1">
        <h1>Comments</h1>
        <div className="container2">
          <div>
            <form className="form" onSubmit={this.submitForm}>
              <p>Say something about 4.0 Technologies</p>
              <input
                onChange={this.nameChange}
                className="nameInput"
                type="text"
                placeholder="Your Name"
                value={nameInput}
              />
              <textarea
                onChange={this.commentChange}
                className="textInput"
                type="text"
                placeholder="Your Comment"
                rows="8"
                cols="20"
                value={commentText}
              />
              <button type="submit" className="button1">
                Add Comment
              </button>
            </form>
          </div>
          <div className="imgContainer">
            <img
              className="image1"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <hr />
        <p>
          <span className="spanItem">{commentList.length}</span> Comments
        </p>
        {commentList.map(each => (
          <CommentItem key={each.id} itemDetails={each} />
        ))}
      </div>
    )
  }
}

export default Comments
