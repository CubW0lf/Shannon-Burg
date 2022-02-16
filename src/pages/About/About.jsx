import Shannon from "../../assets/images/shannon-about.png";
import Socials from "../../components/Socials/Socials";
import "./About.css";

const About = () => {
    return (
        <section className="About" id="about">
            <div className="shannon">
                <img src={Shannon} className="shannon-image" alt="moi" />
            </div>
            <div className="text">
                <div className="up">
                    <h2>
                        Hello, <br /> I'm Shannon
                    </h2>
                    <Socials />
                </div>
                <hr />
                <p>
                    Et oui, moi c'est Shannon (non sérieusement ?). Passionnée depuis toujours par le domaine du dessin, de
                    l'illustration jeunesse et amoureuse des jolies mises en page, c'est donc sans hésité que je me suis
                    orientée vers le domaine du graphisme et de la communication visuelle. Véritable touche à tout, j'aime
                    autant réaliser des travaux à destination du print que du web. J'aime pouvoir créer, m'exprimer, jouer
                    avec les couleurs, les matières, tester de nouvelles choses, découvrir de nouveaux logiciels, et apporter
                    un peu de couleur. Mes diplômes en poche et après avoir enchaîner différents stages et emplois, j'ai
                    finalement trouvé un poste qui me correspond à 100% et répond à mes attentes : magicienne de photoshop,
                    autrement dit : retoucheuse photo. Mais ça c’était avant de passer maquettiste :P Alors pourquoi ce site
                    allez-vous me dire? Et bien ce site est là avant-tout pour vous partager mes différentes créations, tout
                    domaine confondu. Alors prenez un café, du pop-corn, votre boîte de bonbons préférés, une boisson froide,
                    ou tout autre chose qui pourrait vous titiller les papilles et entrez dans mon petit monde.
                </p>
                <button>Télécharger mon CV</button>
            </div>
        </section>
    );
};

export default About;
