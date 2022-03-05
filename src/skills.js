import { BsLaptop, BsMegaphone, BsHeart } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import { GrDiamond } from "react-icons/gr";
import { GiDiamondRing, GiSewingNeedle } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";

const skills = [
  {
    id: 1,
    logo: <BsLaptop />,
    titre: "WEBDESIGN",
    text: "Réalisation de design pour blogs, portfolios, boutiques en ligne, sites internet tout domaine confondu.",
    backgroundColor: "rgba(28, 31, 47, 0.5)",
  },
  {
    id: 2,
    logo: <GoDeviceMobile />,
    titre: "RESPONSIVE DESIGN",
    text: "Installation de votre thème et/ou personnalisation via Wordpress ou Blogger + Mise en ligne.",
    backgroundColor: "rgba(38, 32, 55, 0.5)",
  },
  {
    id: 3,
    logo: <GrDiamond />,
    titre: "GRAPHIC DESIGN",
    text: "Flyers, Affiches, plaquettes, catalogues, brochures, logotypes, invitations, faire-part...",
    backgroundColor: "rgba(73, 48, 64, 0.5)",
  },
  {
    id: 4,
    logo: <BsMegaphone />,
    titre: "CAMPAGNE MULTIMEDIA",
    text: "Création de campagnes publicitaires + ses déclinaisons sous différents supports (web et print).",
    backgroundColor: "rgba(36, 43, 71, 0.5)",
  },
  {
    id: 5,
    logo: <BsHeart />,
    titre: "ILLUSTRATION",
    text: "Illustrations pour différents supports (mug, tote bag...), bannières web et réseaux sociaux, fin de vidéo youtube, portrait vectoriel.",
    backgroundColor: "rgba(35, 53, 69, 0.5)",
  },
  {
    id: 6,
    logo: <FaPencilAlt />,
    titre: "DESSIN // PORTRAIT",
    text: "Crayon de papier, peinture acrylique, aquarelle, fusain, pastels gras et pastels secs, crayons de couleur...",
    backgroundColor: "rgba(28, 31, 47, 0.5)",
  },
  {
    id: 7,
    logo: <GiDiamondRing />,
    titre: "CREATION DE BIJOUX",
    text: "Bijoux en pâte polymère, ou simple montage, perles, noeuds en tissus, bracelets brésiliens.",
    backgroundColor: "rgba(38, 32, 55, 0.5)",
  },
  {
    id: 8,
    logo: <GiSewingNeedle />,
    titre: "BRODERIE & CROCHET",
    text: "Réalisation de différentes broderies décoratives ou canevas (citations, motifs, objets), amigurimis...",
    backgroundColor: "rgba(73, 48, 64, 0.5)",
  },
  {
    id: 9,
    logo: <SiCoffeescript />,
    titre: "DIVERS LOISIRS CRÉATIFS",
    text: "Do it yourself (DIY) et réalisation de différents éléments décoratifs, petits travaux manuels, scrapbooking...",
    backgroundColor: "rgba(36, 43, 71, 0.5)",
  },
];

export default skills;
