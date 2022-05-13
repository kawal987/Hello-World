import React from "react";
import "./Style.css";

const FooterListArray = [
  "About",
  "Brands",
  "Portfolio",
  "Support",
  "Contact us",
  "Order History",
  "Site Map",
];
const FooterList2Array = [
  "My Account",
  "Customer",
  "My Vouchers",
  "Search Terms",
  "Terms & Conditions",
  "Privacy Policy",
];
const icon = [
  <i className="fa-brands fa-facebook"></i>,
  <i class="fa-brands fa-twitter"></i>,
  <i class="fa-brands fa-google-plus-g"></i>,
  <i class="fa-brands fa-instagram"></i>,
  <i class="fa-brands fa-behance"></i>,
];
const cards = [
  <i class="fa-brands fa-cc-visa"></i>,
  <i class="fa-brands fa-cc-discover"></i>,
  <i class="fa-brands fa-cc-paypal"></i>,
  <i class="fa-brands fa-cc-mastercard"></i>,
  <i class="fa-brands fa-cc-amex"></i>,
];
const Footer = () => {
  return (
    <div className="section ">
      <div className="main ">
        <div className="first">
          <p className="heading1">QUICK LINK</p>
          <div className="list">
            <li className="list1 ">
              {FooterListArray?.map((list) => (
                <div>{list}</div>
              ))}
            </li>
            <li className="list2">
              {FooterList2Array?.map((list2) => (
                <div>{list2}</div>
              ))}
            </li>
          </div>
        </div>

        <div className="second">
          <p className="heading2">VOLTA</p>
          <div className="fafa">
            {icon?.map((icon) => (
              <div className="footericon">{icon}</div>
            ))}
          </div>
          <div className="cards">
            {cards?.map((card) => (
              <div className="card">{card}</div>
            ))}
          </div>
          <div className="para">
            <p>Copyrights 2016 VOLTA. All Rights Reserved</p>
          </div>
        </div>

        <div className="third">
          <p className="heading3">LOCATION</p>
          <div>
            <img src="https://themewar.com/html/volta/images/map.png" />
          </div>
          <div className="para2">
            <p>1040,Angelgarden, North Texas, United States. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
