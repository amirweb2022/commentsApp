import Comment from "../Comments/Comment/Comment";
import "./comments.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllComments } from "../../services/getAllCommentsService";
const Comments = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };
    getComments();
  }, []);
  const renderComments = () => {
    let renderValue = <p>loading...</p>;
    if (error) renderValue = <p>Fetchin Data Faild</p>;
    if (comments && !error) {
      renderValue = comments.map((c) => {
        return (
          <Link to={`/comment/${c.id}`} key={c.id}>
            <Comment name={c.name} email={c.email} body={c.body} />
          </Link>
        );
      });
    }
    return renderValue;
  };
  return <section>{renderComments()}</section>;
};

export default Comments;