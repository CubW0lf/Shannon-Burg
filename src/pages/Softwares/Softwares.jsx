import softwares from "../../softwares.js";
import SoftWare from "../../components/Software/Software";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "./Softwares.css";
import Title from "../../components/Title/Title.jsx";

const Softwares = () => {
    return (
        <section className="Softwares" id="softwares">
            <div className="section-container">
                <Title
                    text={
                        <h2>
                            Et si on Parlait
                            <br />
                            compétences et Logiciels
                        </h2>
                    }
                    social={false}
                />
                <div className="softwares-container">
                    {softwares.length !== 0 && softwares.map((s) => <SoftWare key={s.id} software={s} />)}
                </div>
            </div>
            <div className="citation">
                <span>
                    <RiDoubleQuotesL />
                    Créative, passionnée & motivée
                    <RiDoubleQuotesR />
                </span>
                <a href="#skills">
                    <div className="mouse">
                        <div className="scroll"></div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Softwares;
