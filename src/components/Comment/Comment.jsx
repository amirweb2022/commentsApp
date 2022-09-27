import "./comment.css";
const Comment = ({ name, email, onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <p><span>name</span> : {name}</p>
      <p><span>email</span> : {email}</p>
    </div>
  );
};

export default Comment;