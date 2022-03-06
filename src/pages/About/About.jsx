import { useEffect, useState } from "react";
import Shannon from "../../assets/images/shannon_about.png";
import Title from "../../components/Title/Title";
import ArticlesLoader from "../../components/ArticlesLoader/ArticlesLoader.js";
import { findPage } from "../../services/pagesAPI";
import "./About.css";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    findPage(42).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <section className="About" id="about">
      {about.length !== 0 ? (
        <>
          <div className="shannon">
            <img src={Shannon} className="shannon-image" alt="moi" />
          </div>
          <div className="text">
            <Title
              text={
                <h2>
                  Hello
                  <br />
                  I'm Shannon
                </h2>
              }
              social={true}
            />
            <div className="content-container">
              <p dangerouslySetInnerHTML={{ __html: about?.content.rendered }}></p>
              <button>Télécharger mon CV</button>
            </div>
          </div>
        </>
      ) : (
        <ArticlesLoader />
      )}
    </section>
  );
};

export default About;
