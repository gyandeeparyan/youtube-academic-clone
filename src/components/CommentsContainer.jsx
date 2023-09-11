import CommentsList from "./CommentsList"
import { COMMENTS } from './../Data/Comments';

const CommentsContainer = () => {
  return (
    <>
    <div className="mt-5">
       <CommentsList comments ={COMMENTS} />
    </div>
    </>
  )
}

export default CommentsContainer