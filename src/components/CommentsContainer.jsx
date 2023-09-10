import CommentsList from "./CommentsList"
import { COMMENTS } from './../Data/Comments';

const CommentsContainer = () => {
  return (
    <>
    <div>
       <CommentsList comments ={COMMENTS} />
    </div>
    </>
  )
}

export default CommentsContainer