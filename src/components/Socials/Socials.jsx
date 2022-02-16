import { BsFacebook, BsLinkedin, BsPinterest, BsInstagram } from "react-icons/bs";
import "./Socials.css";

const Socials = () => {
    return (
        <ul className="Socials">
            <li>
                <BsFacebook />
            </li>
            <li>
                <BsLinkedin />
            </li>
            <li>
                <BsPinterest />
            </li>
            <li>
                <BsInstagram />
            </li>
        </ul>
    );
};

export default Socials;
