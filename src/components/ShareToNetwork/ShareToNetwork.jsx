import "./ShareToNetwork.css";

const ShareToNetwork = ({ id }) => {
  return (
    <ul className="ShareToNetwork">
      <li>
        <iframe
          src={`https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fshannonburg.fr%2Farticle%2F${id}&layout=button&size=small&appId=189569413498&width=81&height=20`}
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          title="FB-Share"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
        ></iframe>
      </li>
    </ul>
  );
};

export default ShareToNetwork;
