import dayjs from "dayjs";
import "./ArticleComments.css";
import { useFindAllByPostQuery } from "../../services/wordpress";
import ArticlesLoader from "../ArticlesLoader/ArticlesLoader";

const ArticleComments = ({ post, handleParent, handlePostComment }) => {
  const { data: comments, isLoading, isSuccess, error } = useFindAllByPostQuery(post);

  const orderedComments = [];

  for (let i = 0; i < comments?.length; i++) {
    if (comments[i].parent === 0) {
      orderedComments.push({ parent: comments[i], sub: [] });
    }
  }

  orderedComments.forEach((o) => comments?.filter((c) => c.parent === o.parent.id && o.sub.push(c)));

  return (
    <div className="ArticleComments commentaires">
      {error && <>Oh no, there was an error</>}
      {isLoading && <ArticlesLoader />}
      {isSuccess && comments.length === 1 && <p className="counter">{comments.length} ptit mot déposé. Merci</p>}
      {isSuccess && comments.length > 1 && <p className="counter">{comments.length} ptits mots déposés. Merci</p>}
      {isSuccess &&
        comments.length !== 0 &&
        orderedComments.map((p) => (
          <li key={p.parent.id} className="parent">
            <div className="comment">
              <div className="thumbnail">
                <img src={p.parent.author_avatar_urls[96]} alt="" />
              </div>
              <div className="infos">
                <div className="comment_author">
                  <span>
                    {p.parent.author_name}
                    {p.parent.author_url === "http://shannonburg.fr" && <span className="auteur">Auteur</span>}
                  </span>
                  <span className="date">{dayjs(p.parent.date).format("DD/MM/YYYY hh:mm")}</span>
                </div>
                <div className="text" dangerouslySetInnerHTML={{ __html: p.parent.content.rendered }}></div>
                <span className="answer" onClick={() => handleParent(p.parent.id, p.parent.author_name)}>
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
                        <span className="author_name">
                          {s.author_name}
                          {s.author_url === "http://shannonburg.fr" && <span className="auteur">Auteur</span>}
                        </span>
                        <span className="date">{dayjs(s.date).format("DD/MM/YYYY hh:mm")}</span>
                      </div>
                      <div className="text" dangerouslySetInnerHTML={{ __html: s.content.rendered }}></div>
                      <span className="answer" onClick={() => handleParent(s.parent, s.author_name)}>
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
