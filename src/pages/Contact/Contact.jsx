import Title from "../../components/Title/Title";
import shannon from "../../assets/images/shannon_contact.png";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="Contact" id="contact">
            <div className="main">
                <Title text={<h2>Si tu souhaites me contacter, c'est par ici que ca se passe</h2>} social={false} />
                <form>
                    <input type="text" placeholder="Nom Complet" />
                    <input type="email" placeholder="Email" />
                    <textarea name="" cols="30" rows="10" placeholder="Votre Message"></textarea>
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
