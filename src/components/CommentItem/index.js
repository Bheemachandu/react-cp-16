import './index.css'

const CommentItem = props => {
  const {itemDetails} = props
  const {name, comment, date, isLiked} = itemDetails
  return (
    <h1>
      {name},{comment},{date},{isLiked}
    </h1>
  )
}

export default CommentItem
