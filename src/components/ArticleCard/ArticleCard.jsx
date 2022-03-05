import "./ArticleCard.css";

const ArticleCard = ({ data }) => {
  // dayjs(data.date).format("DD/MM/YYYY");
  return (
    <div
      className="Article"
      style={{
        backgroundImage: `url("${data.fimg_url && data?.fimg_url}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="info-store">
        <h3 dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h3>
        <span className="date" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></span>
      </div>
    </div>
  );
};

export default ArticleCard;
