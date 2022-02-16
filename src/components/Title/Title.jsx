import Socials from "../../components/Socials/Socials";
import "./Title.css";

const Title = ({ text, social }) => {
    return (
        <div className="Title">
            <div className="title-container">
                {text}
                {social && <Socials />}
            </div>
            <hr />
        </div>
    );
};

export default Title;
