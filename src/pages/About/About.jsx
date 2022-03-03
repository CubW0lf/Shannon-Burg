// import Shannon from "../../assets/images/shannon-about.png";
// import Title from "../../components/Title/Title";
// import ArticlesLoader from "../../components/ArticlesLoader/ArticlesLoader.js";
import "./About.css";

const About = () => {
  // const { data: bio, isLoading, isSuccess, error } = useFindPageByidQuery(42);
  return (
    <section className="About" id="about">
      <p>About</p>
      {/* {error && <>Oh no, there was an error</>}
      {isLoading && <ArticlesLoader />}
      {isSuccess ? (
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
            <p dangerouslySetInnerHTML={{ __html: bio?.content.rendered }}></p>
            <button>Télécharger mon CV</button>
          </div>
        </>
      ) : (
        ""
      )} */}
    </section>
  );
};

export default About;
