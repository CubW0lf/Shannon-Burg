import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleComments from "../../components/ArticleComments/ArticleComments";
import ArticleInfos from "../../components/ArticleInfos/ArticleInfos";
import "./ArticleSingle.css";

const ArticleSingle = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [pseudo, setPseudo] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/wp-json/wp/v2/posts/${id}`).then(({ data }) => {
            setPost(data);
        });
    }, [id]);

    const handlePostComment = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/wp-json/wp/v2/comments`, {
                author_name: pseudo,
                content: message,
                date: new Date(),
                parent: 0,
                post: id,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <section className="ArticleSingle">
            {post.length !== 0 && (
                <>
                    <span className="date">{dayjs(post.date).format("DD/MM/YYYY")}</span>
                    <h1>{post.title.rendered}</h1>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="content"></div>
                    <ArticleInfos article={post} />
                    <ArticleComments post={id} />
                    <h2>Laisser un Commentaire</h2>
                    <hr />
                    <form className="comment-form" onSubmit={handlePostComment}>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Votre Pseudo"
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Votre message"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                    <div className="push"></div>
                </>
            )}
        </section>
    );
};

export default ArticleSingle;
