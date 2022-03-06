import { useState, useEffect } from "react";
import Socials from "../../components/Socials/Socials";
import { AiFillTag } from "react-icons/ai";
import { findPage } from "../../services/pagesAPI";
import "./ArticleInfos.css";

const ArticleInfos = ({ tags }) => {
  const [bio, setBio] = useState([]);

  useEffect(() => {
    findPage(304).then((data) => {
      setBio(data);
    });
  }, []);

  return (
    <div className="ArticleInfos infos">
      <div className="up">
        <div className="tags">
          <AiFillTag />
          <span>
            Tags:{" "}
            {tags?.length !== 0
              ? tags?.map((t) => (
                  <a href="/#portfolio" key={t.id} className="tag">
                    {t.name}
                  </a>
                ))
              : "Aucun Tag"}
          </span>
        </div>
        <Socials />
      </div>
      <div className="author">
        <div className="thumbnail" style={{ backgroundImage: `url(${bio.length !== 0 && bio.fimg_url})` }}></div>
        <div className="text">
          <h3>Shannon Burg</h3>
          {bio.length !== 0 && <span dangerouslySetInnerHTML={{ __html: bio?.content.rendered }}></span>}
          <div>
            <span>Retrouve-moi sur les réseaux sociaux :</span>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInfos;
