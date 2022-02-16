import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Socials from "../../components/Socials/Socials";
import { AiFillTag } from "react-icons/ai";
import "./ArticleSingle.css";

const ArticleSingle = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    const [pseudo, setPseudo] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/wp-json/wp/v2/posts/${id}`).then(({ data }) => {
            setPost(data);
        });
        axios.get(`http://localhost:8000/wp-json/wp/v2/comments?post=${id}`).then(({ data }) => {
            setComments(data);
        });
    }, [id]);

    const handleComment = () => {};

    const orderedComments = [];

    for (let i = 0; i < comments.length; i++) {
        if (comments[i].parent === 0) {
            orderedComments.push({ parent: comments[i], sub: [] });
        }
    }

    orderedComments.forEach((m) => comments.filter((c) => m.parent.id === c.parent && m.sub.push(c)));

    return (
        <section className="ArticleSingle">
            {post.length !== 0 && (
                <>
                    <span className="date">{dayjs(post.date).format("DD/MM/YYYY")}</span>
                    <h1>{post.title.rendered}</h1>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="content"></div>
                    <div className="infos">
                        <div className="up">
                            <div className="tags">
                                <AiFillTag />
                                <span>Tags: {post.tags.length !== 0 ? post.tags.map((t) => t) : "Aucun Tag"}</span>
                            </div>
                            <Socials />
                        </div>
                        <div className="author">
                            <div className="thumbnail"></div>
                            <div className="text">
                                <h3>Shannon Burg</h3>
                                <span>
                                    Maquettiste, passionnée d'illustration, de dessin, de photomontages, de loisirs créatifs
                                    mais également de multimédia, aimant la décoration et tout ce qui touche au domaine
                                    créatif.
                                </span>
                                <div>
                                    <span>Retrouve-moi sur les réseaux sociaux :</span>
                                    <Socials />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="commentaires">
                        {comments.length !== 0 && <p className="counter">{comments.length} ptits mots déposés. Merci</p>}
                        {comments.length !== 0 &&
                            orderedComments.map((p) => (
                                <li key={p.parent.id} className="parent">
                                    <div className="comment">
                                        <div className="thumbnail">
                                            <img src={p.parent.author_avatar_urls[96]} alt="" />
                                        </div>
                                        <div className="infos">
                                            <div className="comment_author">{p.parent.author_name}</div>
                                            <div
                                                className="text"
                                                dangerouslySetInnerHTML={{ __html: p.parent.content.rendered }}
                                            ></div>
                                        </div>
                                    </div>
                                    {p.sub.length !== 0 && (
                                        <ul className="answers">
                                            {p.sub.map((s) => (
                                                <div className="comment" key={s.id}>
                                                    <div className="thumbnail">
                                                        <img src={s.author_avatar_urls[96]} alt="" />
                                                    </div>
                                                    <div className="infos">
                                                        <div className="comment_author">{s.author_name}</div>
                                                        <div
                                                            className="text"
                                                            dangerouslySetInnerHTML={{ __html: s.content.rendered }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                    </div>
                    <form className="comment-form">
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
