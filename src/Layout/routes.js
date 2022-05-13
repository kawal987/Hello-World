// import logo from "../assets/logo.svg";
import Home from "../assets/home-solid.svg";
import addressBook from "../assets/addressBook.svg";
// import addressCard from "../assets/addressCard.svg";
// import Team from "../assets/social.svg";
// import Calender from "../assets/sceduled.svg";
// import Projects from "../assets/starred.svg";
// import Documents from "../assets/draft.svg";
// import PowerOff from "../assets/power-off-solid.svg";
import WoMenCloth from "../assets/WoMenCloth.svg";
import MenCloth from "../assets/MenCloth.svg";
import boltSolid from "../assets/boltSolid.svg";
import ring from "../assets/ring.svg";
export const routes = [
  {
    id: "/",
    path: "/",
    name: "Home",
    img: Home,
  },
  // {
  //   id: "/contact",
  //   path: "/contact",
  //   name: "Contact",
  //   img: addressBook,
  // },
  // {
  //   id: "/About Us",
  //   path: "/about-us",
  //   name: "About ",
  //   img: addressCard,
  // },
  {
    id: "/ElectronicsCards",
    path: `/category/${"electronics"}`,
    name: "ElectronicsCards ",
    img: boltSolid,
  },
  {
    id: "/JeweleryCards",
    path: `/category/${"jewelery"}`,
    name: "JeweleryCards ",
    img: ring,
  },
  {
    id: "/womenClothingCards",
    path: `/category/${"women's clothing"}`,
    name: "womenClothingCards ",
    img: WoMenCloth,
  },
 
  // {
  //   id: "/Jewelery",
  //   path: "/Jewelery",
  //   name: "Jewelery ",
  //   img: ring,
  // },
  {
    id: "/menClothingCards",
    path: `/category/${"men's clothing"}`,
    name: "menClothingCards ",
    img: MenCloth,
  },
];
