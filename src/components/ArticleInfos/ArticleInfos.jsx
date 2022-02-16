import Socials from "../../components/Socials/Socials";
import { AiFillTag } from "react-icons/ai";
import "./ArticleInfos.css";

const ArticleInfos = ({ article }) => {
    return (
        <div className="ArticleInfos infos">
            <div className="up">
                <div className="tags">
                    <AiFillTag />
                    <span>Tags: {article.tags.length !== 0 ? article.tags.map((t) => t) : "Aucun Tag"}</span>
                </div>
                <Socials />
            </div>
            <div className="author">
                <div className="thumbnail"></div>
                <div className="text">
                    <h3>Shannon Burg</h3>
                    <span>
                        Maquettiste, passionnée d'illustration, de dessin, de photomontages, de loisirs créatifs mais
                        également de multimédia, aimant la décoration et tout ce qui touche au domaine créatif.
                    </span>
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
