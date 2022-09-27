import Comment from "../../components/Comment/Comment";
import NewComents from "../../components/NewComment/NewComment";
import FullComents from "../../components/FullComment/FullComment";
import "./discussion.css";
import { useEffect, useState } from "react";
import { getAllComments } from "../../services/getAllCommentsService";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectId, setSelectId] = useState(null);
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
  const selectCommentHandler = (id) => {
    setSelectId(id);
  };

  const renderComments = () => {
    let renderValue = <p>loading...</p>;
    if (error) renderValue = <p>Fetchin Data Faild</p>;
    if (comments && !error) {
      renderValue = comments.map((c) => {
        return (
          <Comment
            key={c.id}
            name={c.name}
            email={c.email}
            body={c.body}
            onClick={() => selectCommentHandler(c.id)}
          />
        );
      });
    }
    return renderValue;
  };
  return (
    <main>
      <section>{renderComments()}</section>

      <section>
        <FullComents
          commentId={selectId}
          setComments={setComments}
          setSelectId={setSelectId}
        />
      </section>

      <section>
        <NewComents setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
