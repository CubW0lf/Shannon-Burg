import { useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import "./ArticleComments.css";

const ArticleComments = ({ post, setComments, comments, setParent }) => {
    useEffect(() => {
        axios.get(`http://wp.shannonburg.fr/wp-json/wp/v2/comments?post=${post}`).then(({ data }) => {
            setComments(data);
        });
    }, [post, setComments]);

    const orderedComments = [];

    for (let i = 0; i < comments.length; i++) {
        if (comments[i].parent === 0) {
            orderedComments.push({ parent: comments[i], sub: [] });
        }
    }

    orderedComments.forEach((m) => comments.filter((c) => m.parent.id === c.parent && m.sub.push(c)));

    return (
        <div className="ArticleComments commentaires">
            {comments.length !== 0 && <p className="counter">{comments.length} ptits mots déposés. Merci</p>}
            {comments.length !== 0 &&
                orderedComments.map((p) => (
                    <li key={p.parent.id} className="parent">
                        <div className="comment">
                            <div className="thumbnail">
                                <img src={p.parent.author_avatar_urls[96]} alt="" />
                            </div>
                            <div className="infos">
                                <div className="comment_author">
                                    {p.parent.author_name}
                                    <span className="date">{dayjs(p.parent.date).format("DD/MM/YYYY hh:mm")}</span>
                                </div>
                                <div className="text" dangerouslySetInnerHTML={{ __html: p.parent.content.rendered }}></div>
                                <span className="answer" onClick={() => setParent(p.parent.id)}>
                                    Répondre
                                </span>
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
                                            <div className="comment_author">
                                                {s.author_name}
                                                <span className="date">{dayjs(s.date).format("DD/MM/YYYY hh:mm")}</span>
                                            </div>
                                            <div
                                                className="text"
                                                dangerouslySetInnerHTML={{ __html: s.content.rendered }}
                                            ></div>
                                            <span className="answer" onClick={() => setParent(s.id)}>
                                                Répondre
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
        </div>
    );
};

export default ArticleComments;
