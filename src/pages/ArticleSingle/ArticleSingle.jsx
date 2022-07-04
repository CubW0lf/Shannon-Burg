import axios from "axios";
import dayjs from "dayjs";
import { useState, useContext, useEffect } from "react";
import { uxContext } from "../../contexts/uxContext.js";
import { useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import ArticleComments from "../../components/ArticleComments/ArticleComments";
import ArticleInfos from "../../components/ArticleInfos/ArticleInfos";
import Title from "../../components/Title/Title.jsx";
import ArticlesLoader from "../../components/ArticlesLoader/ArticlesLoader.js";
import { findPost } from "../../services/articlesAPI.js";
import { findCategory } from "../../services/categoriesAPI.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./ArticleSingle.css";

const ArticleSingle = () => {
  const { id } = useParams();
  const [pseudo, setPseudo] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState([]);
  const [parent, setParent] = useState(0);
  const [answerTo, setAnswerTo] = useState("");
  const [post, setPost] = useState([]);
  const [categoriesId, setCategoriesId] = useState([]);
  const [categories, setCategories] = useState([]);

  const { handleFlash, flash, flashType } = useContext(uxContext);

  const { ref, inView } = useInView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    findPost(id).then((data) => {
      setPost(data);
      setCategoriesId(data.categories);
    });
  }, [id]);

  useEffect(() => {
    let all = [];
    if (categoriesId?.length !== 0) {
      categoriesId?.forEach((c) => findCategory(c).then((data) => all.push(data)));
      setCategories(all);
    }
  }, [categoriesId]);

  const handleParent = (parentId, author) => {
    setParent(parentId);
    setAnswerTo(`Vous répondez à : ${author}`);
    handleFlash("info", `Vous répondez à : ${author}`, 3000);
  };

  const handlePostComment = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `https://wp.shannonburg.fr/wp-json/wp/v2/comments?author_name=${pseudo}&content=${message}&post=${id}&parent=${parent}&author_email=${email}`
      )
      .then((response) => {
        handleFlash("success", "Votre commentaire à bien été envoyé", 3000);
        setPseudo("");
        setMessage("");
        setEmail("");
      })
      .catch((err) => handleFlash("error", err.message, 3000));
  };

  return (
    <>
      {post.length !== 0 ? (
        <section className="ArticleSingle">
          <Categories />
          {post.previous && (
            <Link to={`/article/${post.previous.id}`}>
              <div className={`prev ${inView ? "" : "active"}`}>
                <BsChevronLeft />
              </div>
            </Link>
          )}
          {post.next && (
            <Link to={`/article/${post.next.id}`}>
              <div className={`next ${inView ? "" : "active"}`}>
                <BsChevronRight />
              </div>
            </Link>
          )}
          <div style={{ backgroundImage: `url(${post.fimg_url})` }} alt="" className="fimg" ref={ref}></div>
          <div className="content">
            <h1 dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h1>
            <hr />
            <span className="date">Publié le : {dayjs(post?.date).format("DD/MM/YYYY")}</span>
            <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }} className="text"></div>

            <ArticleInfos tags={categories} id={id} />
            <ArticleComments
              post={id}
              comments={comments}
              setComments={setComments}
              handleParent={handleParent}
              handlePostComment={handlePostComment}
            />
            <Title text={<h2>Laisser un Commentaire</h2>} social={false} />
            {answerTo !== "" && <p>{answerTo}</p>}
            <form className="comment-form" onSubmit={handlePostComment}>
              <input type="text" placeholder="Ton pseudo *" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ton email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Ton message *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
          {flash !== "" ? <div className={`flash ${flashType !== "" ? flashType : ""}`}>{flash}</div> : ""}
          <div className="push"></div>
        </section>
      ) : (
        <ArticlesLoader className="ArticleSingle" />
      )}
    </>
  );
};

export default ArticleSingle;
