import About from "../About/About";
import Softwares from "../Softwares/Softwares";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="Home" id="home">
        <div className="citations">
          <span className="welcome">Bienvenue</span>
          <h2>
            <span>Je Suis </span>{" "}
            <Typewriter
              options={{
                strings: ["WEB DESIGNER ", "GRAPHIC DESIGNER ", "ILLUSTRATRICE ", "RETOUCHEUSE PHOTO ", "MAGICIENNE :) "],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <span className="not-mobile quote">&laquo; Fais de ta vie un rêve, et d'un rêve une réalité &raquo;</span>
          <cite className="not-mobile">Antoine de Saint Exupéry</cite>
        </div>
        <div className="shannon"></div>
        <a href="/#portfolio">
          <span className="portfolio-link text-book">Accéder à mes Travaux</span>
        </a>
        <div className="transition"></div>
      </section>
      <About />
      <Softwares />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
