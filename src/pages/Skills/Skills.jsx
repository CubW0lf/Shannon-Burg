import Skill from "../../components/Skill/Skill.jsx";
import skills from "../../skills.js";
import "./Skills.css";

const Skills = () => {
    return (
        <section className="Skills" id="skills">
            <div className="skills-container">
                {skills.length !== 0 && skills.map((s) => <Skill key={s.id} skill={s} />)}
            </div>
        </section>
    );
};

export default Skills;
