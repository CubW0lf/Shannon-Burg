import { useState, useEffect } from "react";
import axios from "axios";
import Shannon from "../../assets/images/shannon-about.png";
import Title from "../../components/Title/Title";
import "./About.css";

const About = () => {
    const [bio, setBio] = useState();

    useEffect(() => {
        axios.get("http://wp.shannonburg.fr/wp-json/wp/v2/pages/42").then(({ data }) => {
            setBio(data);
        });
    }, []);

    return (
        <section className="About" id="about">
            <div className="shannon">
                <img src={Shannon} className="shannon-image" alt="moi" />
            </div>
            <div className="text">
                <Title
                    text={
                        <h2>
                            Hello
                            <br />
                            I'm Shannon
                        </h2>
                    }
                    social={true}
                />
                <p dangerouslySetInnerHTML={{ __html: bio?.content.rendered }}></p>
                <button>Télécharger mon CV</button>
            </div>
        </section>
    );
};

export default About;
