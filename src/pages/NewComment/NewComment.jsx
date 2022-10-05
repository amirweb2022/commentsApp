import { useState } from "react";
import "./newcomment.css";
import { postComment } from "../../services/postCommentService";
const NewComment = ({ history }) => {
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeHandler = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const postCommetnHanler = async () => {
    try {
      await postComment({ ...newComment, postId: 10 });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="newcomment">
      <h2>Add New Comment</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter Name ..."
          onChange={changeHandler}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter Email ..."
          onChange={changeHandler}
        />
      </div>
      <div>
        <input
          type="textarea"
          name="body"
          placeholder="Enter Body ..."
          onChange={changeHandler}
        />
      </div>
      <button onClick={postCommetnHanler}>Add Comment</button>
    </div>
  );
};

export default NewComment;