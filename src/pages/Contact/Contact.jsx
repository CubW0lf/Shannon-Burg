import { useRef, useContext, useState } from "react";
import Title from "../../components/Title/Title";
import shannon from "../../assets/images/shannon_contact.png";
import "./Contact.css";
import emailjs from "emailjs-com";
import { uxContext } from "../../contexts/uxContext";

const Contact = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { handleFlash, flash, flashType } = useContext(uxContext);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (pseudo !== "" && email !== "" && message !== "") {
      emailjs.sendForm("service_1dlwj3m", "template_82r02p2", form.current, "hJk6c0cxtPr9euScO").then(
        () => {
          handleFlash("success", "Votre message a bien été envoyé", 3000);
          setPseudo("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          handleFlash("", error.text, 3000);
        }
      );
    } else {
      handleFlash("error", "Au moins un des champs du formulaire n'a pas été rempli", 3000);
    }
  };

  return (
    <section className="Contact" id="contact">
      <div className="main">
        <Title text={<h2>Si tu souhaites me contacter, c'est par ici que ca se passe</h2>} social={false} />
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Ton Nom de Super-héros"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="ton adresse mail ultra secrète"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Ton p'tit mot"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <aside>
        <img src={shannon} alt="Moi" />
      </aside>
      {flash !== "" ? <div className={`flash ${flashType !== "" ? flashType : ""}`}>{flash}</div> : ""}
    </section>
  );
};

export default Contact;
