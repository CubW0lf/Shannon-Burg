import { useState, useEffect } from "react";
import axios from "axios";
import "./ArticleComments.css";

const ArticleComments = ({ post }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://wp.shannonburg.fr/wp-json/wp/v2/comments?post=${post}`).then(({ data }) => {
            setComments(data);
        });
    }, [post]);

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
                                <div className="comment_author">{p.parent.author_name}</div>
                                <div className="text" dangerouslySetInnerHTML={{ __html: p.parent.content.rendered }}></div>
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
    );
};

export default ArticleComments;
