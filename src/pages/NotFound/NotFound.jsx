import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <p>Oups page non trouvée</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default NotFound;
