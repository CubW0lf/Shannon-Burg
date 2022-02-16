import dayjs from "dayjs";
import "./ArticleCard.css";

const Article = ({ data }) => {
    return (
        <div
            className="Article"
            style={{
                backgroundImage: `url("${data._embedded["wp:featuredmedia"][0].source_url}")`,
                backgroundSize: "cover",
            }}
        >
            <div className="info-store">
                <h3 dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h3>
                <span className="date">{dayjs(data.date).format("DD/MM/YYYY")}</span>
            </div>
        </div>
    );
};

export default Article;
