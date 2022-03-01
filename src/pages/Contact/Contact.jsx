import { useState } from "react";
import Title from "../../components/Title/Title";
import shannon from "../../assets/images/shannon_contact.png";
import "./Contact.css";

const Contact = () => {
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <section className="Contact" id="contact">
            <div className="main">
                <Title text={<h2>Si tu souhaites me contacter, c'est par ici que ca se passe</h2>} social={false} />
                <form action="mailto:cottalorda.vincent@gmail.com" method="post" encType="text/plain">
                    <input
                        type="text"
                        placeholder="Nom Complet"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                    />
                    Email:
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea
                        name=""
                        cols="30"
                        rows="10"
                        placeholder="Votre Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <aside>
                <img src={shannon} alt="Moi" />
            </aside>
        </section>
    );
};

export default Contact;
