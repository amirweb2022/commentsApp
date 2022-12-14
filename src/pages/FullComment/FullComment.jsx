import { useEffect } from "react";
import "./fullcomment.css";
import { getOneCommet } from "../../services/getOneCommentService";
import { deleteOneCommet } from "../../services/delteOneCommentService";
import { useState } from "react";
const FullComment = ({ match, history }) => {
  const commentId = match.params.id;
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      getOneCommet(commentId)
        .then((response) => setComment(response.data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [commentId]);

  const deleteCommentHandler = async () => {
    if (commentId) {
      try {
        await deleteOneCommet(commentId);
        history.push("/");
        setComment(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  let commentDetail = <p>please select a comment !</p>;

  if (commentId) commentDetail = <p>loading ...</p>;

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <h2>Comment</h2>
        <p>
          <span>name</span> : {comment.name}
        </p>
        <p>
          <span>email</span> : {comment.email}
        </p>
        <p>
          <span>body</span> : {comment.body}
        </p>
        <button onClick={deleteCommentHandler}>Delete</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;