import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import "./Socials.css";

const Socials = () => {
  return (
    <ul className="Socials">
      <li>
        <a href="https://www.facebook.com/ShannonIllustration/" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/shannonburg/?originalSubdomain=fr" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/framb0iizy/?hl=fr" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
