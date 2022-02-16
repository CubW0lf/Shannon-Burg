import { useInView } from "react-intersection-observer";
import "./Skill.css";

const Skill = ({ skill }) => {
    const y = Math.round(window.innerHeight * 0.6);

    const { ref, inView, entry } = useInView({ threshold: 0.1 });
    return (
        <div className={`Skill ${inView ? "active" : ""}`} style={{ backgroundColor: skill.backgroundColor }} ref={ref}>
            <span>{skill.logo}</span>
            <h2>{skill.titre}</h2>
            <p>{skill.text}</p>
        </div>
    );
};

export default Skill;
