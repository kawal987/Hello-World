/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from "axios";
import "./style.css";
// import { Switch } from "react-router-dom";
// import logo from "./logo.svg";
import Sidebar from "./Sidebar/index";
// import Home from "./Pages/Home";
// import Team from "./Pages/Team";
// import Calender from "./Pages/Calender";
// import Documents from "./Pages/Documents";
// import Projects from "./Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import ProductCardsComponent from "./Pages/ProductCards/index";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./Pages/FooterPart/index";
import Header from "./Pages/Header/index";
import MyProfile from "./Pages/MyProfile/index";
// import SkeletonCards from "./MyComponents/SkeletonCards";
// import { Router } from "react-router-dom";
// import "./App.css";
import AboutUs from "./Pages/AboutUs/index";
import FirstComponent from "./Pages/FirstComponent/index";
import Contact from "./Pages/Contact/index";
// import TopBar from "./Pages/TopBar";
import ModelOfUsersInfo from "./Pages/ModelOfUsersInfo/index";
// import SliderOfItems from "./Pages/SliderOfItems/index";
// import ElectronicsCards from "../src/Pages/ElectronicsCards/index";
import Services from "../src/Services";
// import Jewelery from "../src/Pages/Jewelery/index";
// import axios from "axios";
const Pages = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vm);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const arrayOnWhyChooseUs = [
  {
    image: `https://codervent.com/shopingo/demo/assets/images/icons/delivery.png`,
    head: "FREE SHIPPING",
    paragraph:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.",
  },
  {
    image: `https://codervent.com/shopingo/demo/assets/images/icons/money-bag.png`,
    head: "100% MONEY BACK GUARANTEE",
    paragraph:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.",
  },
  {
    image: `https://codervent.com/shopingo/demo/assets/images/icons/support.png`,
    head: "ONLINE SUPPORT 24/7",
    paragraph:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.",
  },
];

const arrayOnTopBrands = [
  "https://codervent.com/shopingo/demo/assets/images/brands/01.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/02.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/03.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/04.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/05.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/06.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/07.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/08.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/09.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/10.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/11.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/12.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/13.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/14.png",
  "https://codervent.com/shopingo/demo/assets/images/brands/15.png",
];
function App() {
  const [filterItem, setFilterItem] = useState([]);
  // const [userModal,setUserModal] = useState(false);

  const [currentState, setCurrentState] = useState([]);
  // const [visible, setvisibleState] = useState(false);
  const [getSingleProduct, setGetSingleProduct] = useState({});
  // const [loading, setLoading] = useState(false);
  const [singleLoading, setSingleLoading] = useState(false);
  // console.log("getSingleProduct", getSingleProduct);
  // const [userInfo, setUserInfo] = useState([]);
  // console.log("userInfo", userInfo);
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        if (response?.data?.length > 0) {
          // added new item in previous arraycurrentState
          const newArr = response?.data?.map((item) => {
            return { ...item, addedToCart: false };
          });
          // console.log("newArr", newArr);
          setCurrentState(newArr);
          //  setLoading(false);
        }
      })
      .catch((error) => console.log("error", error));
    // setvisibleState(false);
  };

  const SingleProduct = (id) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        // console.log("RESPONSE", response);
        setGetSingleProduct(response?.data);
        setSingleLoading(false);
      })
      .catch((error) => console.log("error", error));
    // setvisibleState(true)
  };
  // const getUser = () => {
  //   axios
  //     .get(`https://fakestoreapi.com/users`)
  //     .then((response) => setUserInfo(response))
  //     .catch((error) => console.log("error", error));
  // };

  const getCategory = (category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => setCurrentState(res?.data));
  };
  // useEffect(() => {
  //   // SingleProduct();
  //   // setLoading(true);

  //   // getCategory();
  //   // getUser();
  // }, []);

  // const { accountEx } = useParams();
  // console.log('accountEx', accountEx)

  return (
    <>
      {/* < ModelOfUsersInfo userModal={userModal} setUserModal={setUserModal}/> */}
      <div className="relative">
        <Sidebar />
        <Header match={useMatch("/")} filterItem={filterItem} />
        <FirstComponent match={useMatch("/")} />
        <Pages>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location?.pathname}>
              <Route
                path="/"
                element={
                  <ProductCardsComponent
                    // loading={loading}
                    currentState={currentState}
                    SingleProduct={SingleProduct}
                    filterItem={filterItem}
                    setFilterItem={setFilterItem}
                    setCurrentState={setCurrentState}
                    getData={getData}
                  />
                }
              />
              <Route
                path="/product/:productId"
                element={
                  <ProductDetail
                    singleLoading={singleLoading}
                    setSingleLoading={setSingleLoading}
                    getSingleProduct={getSingleProduct}
                    SingleProduct={SingleProduct}
                    // setCurrentState={setCurrentState}
                    // newArr={newArr}
                  />
                }
              />
              <Route
                path="/about-us"
                element={
                  <AboutUs
                    arrayOnTopBrands={arrayOnTopBrands}
                    arrayOnWhyChooseUs={arrayOnWhyChooseUs}
                  />
                }
              />

              <Route path="/Contact" element={<Contact />} />
              <Route path="/Services" element={<Services />} />
              <Route path="account/:accountEx" element={<MyProfile />} />
              <Route
                path="/ModelOfUsersInfo"
                element={
                  <ModelOfUsersInfo
                    setCurrentState={setCurrentState}
                    currentState={currentState}
                  />
                }
              />
              <Route
                path="/category/:cate"
                element={
                  <ProductCardsComponent
                    // loading={loading}
                    currentState={currentState}
                    SingleProduct={SingleProduct}
                    filterItem={filterItem}
                    setFilterItem={setFilterItem}
                    setCurrentState={setCurrentState}
                    getCategory={getCategory}
                    getData={getData}
                  />
                }
              />
              {/* <Route
                path="/Jewelery"
                element={<Jewelery currentState={currentState} />}
              /> */}
            </Routes>
          </AnimatePresence>
        </Pages>
        {/* <SkeletonCards/> */}
        {/* <MyProfile/> */}
        {/* {accountEx ?  */}
        {/* <SliderOfItems /> */}
        <Footer />
        {/* : ''} */}

        {/* <button onClick={()=> navigate(`/category/${'Jewelery'}`)}>click kro</button> */}
      </div>
    </>
  );
}

export default App;
