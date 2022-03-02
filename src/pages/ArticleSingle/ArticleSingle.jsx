import axios from "axios";
import dayjs from "dayjs";
import { useState, useContext } from "react";
import { uxContext } from "../../contexts/uxContext.js";
import { useParams } from "react-router-dom";
import ArticleComments from "../../components/ArticleComments/ArticleComments";
import ArticleInfos from "../../components/ArticleInfos/ArticleInfos";
import Title from "../../components/Title/Title.jsx";
import { useFindByIdQuery } from "../../services/wordpress.js";
import ArticlesLoader from "../../components/ArticlesLoader/ArticlesLoader.js";
import "./ArticleSingle.css";

const ArticleSingle = () => {
  const { id } = useParams();
  const [pseudo, setPseudo] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [parent, setParent] = useState(0);
  const [answerTo, setAnswerTo] = useState("");

  const { handleFlash, flash, flashType } = useContext(uxContext);
  const { data: post, isLoading, isSuccess, error } = useFindByIdQuery(id);

  const handleParent = (parentId, author) => {
    setParent(parentId);
    setAnswerTo(`Vous répondez à : ${author}`);
    handleFlash("info", `Vous répondez à : ${author}`, 3000);
  };

  //   useEffect(() => {
  //     axios.get(`https://wp.shannonburg.fr/wp-json/wp/v2/posts/${id}`).then(({ data }) => {
  //       setPost(data);
  //     });
  //   }, [id]);

  const handlePostComment = async (e) => {
    e.preventDefault();
    const setComment = await axios.post(
      `https://wp.shannonburg.fr/wp-json/wp/v2/comments?author_name=${pseudo}&content=${message}&post=${id}&parent=${parent}`
    );

    if (setComment) {
      handleFlash("success", "Votre commentaire à bien été envoyé", 3000);
      setPseudo("");
      setMessage("");
      axios.get(`https://wp.shannonburg.fr/wp-json/wp/v2/comments?post=${id}`).then(({ data }) => {
        setComments(data);
      });
    } else {
      handleFlash("error", "Une erreur est survenue", 3000);
    }
  };
  return (
    <section className="ArticleSingle">
      {error && <>Oh no, there was an error</>}
      {isLoading && <ArticlesLoader />}
      {isSuccess && (
        <>
          <span className="date">{dayjs(post.date).format("DD/MM/YYYY")}</span>
          <h1>{post.title.rendered}</h1>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="content"></div>
          <ArticleInfos article={post} />
          <ArticleComments post={id} comments={comments} setComments={setComments} handleParent={handleParent} />
          <Title text={<h2>Laisser un Commentaire</h2>} social={false} />
          {answerTo !== "" && <p>{answerTo}</p>}
          <form className="comment-form" onSubmit={handlePostComment}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Votre Pseudo"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
          {flash !== "" ? <div className={`flash ${flashType !== "" ? flashType : ""}`}>{flash}</div> : ""}
          <div className="push"></div>
        </>
      )}
    </section>
  );
};

export default ArticleSingle;
