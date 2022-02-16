import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="content">
                <q>Rêve ta vie en couleur, c'est le secret du bonheur</q>
                <cite>Walt Disney</cite>
                <hr />
                <div className="bottom">
                    <div className="infos"></div>
                    <div className="legal"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
