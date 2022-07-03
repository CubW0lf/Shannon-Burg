import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="content">
        <span className="quote">
          <span>&laquo;</span> Rêve ta vie en couleur,
          <br />
          c'est le secret du bonheur ! <span>&raquo;</span>
        </span>
        <hr />
        <cite>Walt Disney</cite>
        <div className="bottom">
          <div className="infos">
            COPYRIGHT © 2022 DESIGN ET INTÉGRATION: SHANNON &{" "}
            <a href="https://vincentcottalorda.me" target="_blank" rel="noreferrer">
              VINCENT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
