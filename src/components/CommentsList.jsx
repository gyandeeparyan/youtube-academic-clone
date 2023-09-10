import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment?.id}>
              <SingleComment data={comment} />
              <div className='ml-5 border-l-gray-500 border-[1px] '>
                <CommentsList comments={comment?.replies} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentsList;
