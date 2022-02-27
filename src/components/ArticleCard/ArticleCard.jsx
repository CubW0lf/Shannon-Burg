import dayjs from "dayjs";
import "./ArticleCard.css";

const Article = ({ data }) => {
    const image =
        "https://images.unsplash.com/photo-1580065632882-3d6d4ca954ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80";

    return (
        <div
            className="Article"
            style={{
                backgroundImage: `url("${image && image}")`,
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
