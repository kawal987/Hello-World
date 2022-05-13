import React, { useState } from "react";

// All the logo
import logo from "../assets/logo.svg";
// import Home from "../assets/home-solid.svg";
// import Team from "../assets/social.svg";
// import Calender from "../assets/sceduled.svg";
// import Projects from "../assets/starred.svg";
// import Documents from "../assets/draft.svg";
import PowerOff from "../assets/power-off-solid.svg";
import styled from "styled-components";
import {  useNavigate } from "react-router-dom";
import { routes } from "../Layout/routes";
import MyProfile from "../Pages/MyProfile";
// import "./index.css";
// import { useState } from "react/cjs/react.production.min";

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 11rem 0 0 0.5rem;
  // margin: 3.5rem 0 0 0.5rem initial;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  // height: 60vh; initial
  height:58vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 0rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled.li`
  text-decoration: none;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(63deg)
        brightness(105%) contrast(105%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(97%) sepia(80%) saturate(636%) hue-rotate(172deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;

  // padding: 0.5rem 1rem;
  // border: 2px solid var(--white);
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: var(--black);
  color: var(--white);

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(48%) sepia(90%) saturate(7495%) hue-rotate(351deg)
      brightness(90%) contrast(130%);
    transition: all 0.3s ease;

    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Name = styled.div`
  padding: 0 1.5rem;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // pendingfromthis line problem  45: 55 breakoint

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [myProfileModal, setMyProfileModal] = useState(false);
  const navigate = useNavigate();

  const [profileClick, setProfileClick] = useState(false);
  const handleProfileClick = () => setProfileClick(!profileClick);

  return (
    <>    <div className="w-max overflow-hidden" style={{position:'fixed',zIndex:'10000'}}>
      <Container>
        <Button
          // className="buttonStyle"
          clicked={click}
          onClick={() => handleClick()}
        >
          Click
        </Button>

        <SidebarContainer>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>

          <SlickBar clicked={click}>
            
            {routes?.map((item) => (
              <Item
                id={item?.path}
                onClick={() => {
                  navigate(item?.path);
                  setClick(false);
                }}
              >
                <img src={item?.img} alt={item?.name} />
                <Text clicked={click}>{item?.name}</Text>
              </Item>
            ))}
          </SlickBar>

          <Profile clicked={profileClick}>
            <img
              onClick={() => handleProfileClick()}
              src="https://picsum.photos/200"
              alt="Profile"
            />

            <Details clicked={profileClick}>
              <Name>
                <h4>John Doe</h4>
                <a href="/#" onClick={()=>setMyProfileModal(true)}>View profile</a>
             
              </Name>

              <Logout>
                <img  src={PowerOff} alt="logout"
                 onClick={()=>setMyProfileModal(false)} 
                 />
              </Logout>
            </Details>
          </Profile>
        </SidebarContainer>
      </Container>

    </div>
          < MyProfile myProfileModal={myProfileModal} setMyProfileModal={setMyProfileModal}/>
          </>

  );
};

export default Sidebar;
