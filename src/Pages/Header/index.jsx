import React from "react";
import { useState } from "react";
// import ModelOfUsersInfo from "../ModelOfUsersInfo";
import Drawer from "../../MyComponents/NewDrawer/Drawer";
// import MyProfile from "../MyProfile/index";

import "./Style.css";
import { navbarArray } from "../../Layout/NavbarRoutes";
import { useNavigate } from "react-router-dom";

const Header = ({ match, filterItem }) => {
  // console.log('filterItem header', filterItem)
  const [isDrawerOPen, setIsDrawerOPen] = useState(false);
  // const iconFunction = () => {
  //   const icon = document.querySelector(".icon");
  //   const search = document.querySelector(".search");
  //   icon.onclick = function () {
  //     search.classList.toggle("active");
  //   };
  // };
  console.log("match", match);
  // const [userModal, setUserModal] = useState(false);
  const navigate = useNavigate();
  // const [myProfileModal, setMyProfileModal] = useState(false);
  // console.log('userModal', userModal)
  return (
    match && (
      <div className="">
        <div className="flex w-full py-4 ">
          <div className="flex  w-1/3 ml-10 ">
            <div className="mr-3">
              <i class="fa-solid fa-bullseye"></i>
            </div>
            <div>
              United Kingdom, $ GBP <span>|</span> English
            </div>
          </div>
          <div className="text-4xl font-medium w-1/2 flex justify-center">
            {/* N E T - A - P O R T E R */}
           P A C K - A - P E H R A W A
          </div>

          <div className="flex justify-end w-1/3 mr-10">
            <i class="fa-solid fa-star mr-3 "> </i>
            <span className="">|</span>
            <div className="relative">
              <div>
                <p
                  className=" absolute bottom-8 left-6 bg-black text-white rounded-full text-xs w-4 text-center hover:bg-orange-500 hover:text-white cursor-pointer"
                  style={{ fontSize: "8px" }}
                >
                  {filterItem?.length}
                </p>
              </div>
              <div className="relative">
                <i
                  class="fa-solid fa-bag-shopping ml-3 flex justify-center relative cursor-pointer hover:text-orange-500 "
                  onClick={() => setIsDrawerOPen(true)}
                ></i>
              </div>
            </div>
            <span className="ml-3">|</span>
            <p className="ml-3">
              Register <span className="ml-3">|</span>
            </p>
            <p className="ml-3">Sign In</p>
          </div>
        </div>

        <div className="bg-white w-full text-white mt-12 mb-2 flex relative">
          {/* <div className="body"> */}

          <div className=" bg-white ">
            <ul id="ul-items">
              {navbarArray?.map((data) => (
                <li
                  className="overflow-hidden cursor-pointer"
                  id="li-items"
                  onClick={() => {
                    // if (data?.navItems === "Team") {
                    //   setUserModal(true);
                    // } else if (data?.navItems === "Portfolio") {
                    //   // toggling of button step by step
                    //   // if (myProfileModal === true) {
                    //   //   setMyProfileModal(false)
                    //   // } else {
                    //   //   setMyProfileModal(true)
                    //   // }
                    //   // shortcut method of toggling of button
                      // setMyProfileModal(!myProfileModal);
                    // }
                    // if(data?.path){
                    // }
                    if (data?.path) {
                      navigate(data?.path);
                    }
                  }}
                >
                  <a>
                    <div className="icon">
                      <div className="">{data?.icon}</div>
                      <div className="">{data?.icon}</div>
                    </div>

                    <div className="name ">
                      <span datatype={data?.navItems}>{data?.navItems}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* <nav className='w-full mx-10 ' >
                <ul className='flex w-9/12 justify-evenly  '>
                    <li className='mr-5'>SALE</li>
                    <li>WHAT'S NEW</li>
                    <li>DESIGNERS</li>
                    <li>CLOTHING</li>
                    <li>SHOES</li>
                    <li>BAGS</li>
                    <li>ACCESSORIES</li>
                    <li>JEWELLERY</li>
                    <li>LINGERIE</li>
                    <li>BEAUTY</li>
                </ul>
            </nav> */}
          {/* <div className="search ">
          <div className="icon" onClick={() => iconFunction()}></div>
          <div className="input">
            <input type="text" placeholder="search" id="mysearch" />
          </div>
          <span
            className="clear"
            onclick=" document.getElementById('mysearch').value = ''"
          ></span>
        </div> */}
        </div>
        {/* <ModelOfUsersInfo userModal={userModal} setUserModal={setUserModal} /> */}
        {/* <MyProfile
          myProfileModal={myProfileModal}
          setMyProfileModal={setMyProfileModal}
        /> */}
        <Drawer
          drawerOpen={isDrawerOPen}
          setDrawerOpen={setIsDrawerOPen}
          filterItem={isDrawerOPen && filterItem}
        />
      </div>
    )
  );
};

export default Header;
