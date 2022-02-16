import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import Search from "../Search/Search";
import "./Navbar.css";

const Navbar = () => {
    const [toggleBurger, setToggleBurger] = useState(false);
    return (
        <>
            <nav className="Navbar">
                <ul className="not-mobile">
                    <a href="/#about">
                        <li>À Propos</li>
                    </a>
                    <a href="/#softwares">
                        <li>Compétences</li>
                    </a>
                </ul>
                <a href="/#home" className="not-mobile">
                    <img src={Logo} alt="Logo" className="logo" />
                </a>
                <ul className="not-mobile">
                    <a href="/#portfolio">
                        <li>Portfolio</li>
                    </a>
                    <a href="/#contact">
                        <li>Contact</li>
                    </a>
                </ul>
                <div
                    className={`burger mobile${toggleBurger ? " cross" : ""}`}
                    onClick={() => setToggleBurger(!toggleBurger)}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <Search />
            </nav>
            <div className={`menu${toggleBurger ? " active" : ""}`}>
                <ul>
                    <a href="/#home" onClick={() => setToggleBurger(!toggleBurger)}>
                        <li>Accueil</li>
                    </a>
                    <a href="/#about" onClick={() => setToggleBurger(!toggleBurger)}>
                        <li>À Propos</li>
                    </a>
                    <a href="/#softwares" onClick={() => setToggleBurger(!toggleBurger)}>
                        <li>Compétences</li>
                    </a>
                    <a href="/#portfolio" onClick={() => setToggleBurger(!toggleBurger)}>
                        <li>Portfolio</li>
                    </a>
                    <a href="/#contact" onClick={() => setToggleBurger(!toggleBurger)}>
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
