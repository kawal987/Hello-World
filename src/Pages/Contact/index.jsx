import React, { useState } from "react";
import "./Style.css";
import {  useNavigate } from "react-router-dom";
const Contact = () => {
  const [input, setInput] = useState();
  console.log("input", input);
  const navigate =useNavigate();
  return (
    <div className="body">
      <div className=" bg-gray-100 py-3 border-y border-gray-300 w-full">
        <div className="flex  mx-40 w-4/5 justify-between items-center">
          <div className="mr-40 text-3xl font-semibold text-gray-900">
            Contact Info
          </div>
          <div className="flex w-40 justify-evenly ">
            <div className="pointer" onClick={()=> navigate("/")}>Home</div>
            <div className="text-xl">
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="text-gray-500">Contact</div>
          </div>
        </div>
      </div>

      <div className="contactUs">
        <div className="title">
          <h2 style={{ color: "black", fontWeight: "bold" }}>Get in Touch</h2>
        </div>
        <div className="box">
          {/* form */}
          <div className="contact form" style={{paddingTop:'50px'}}>
            <h3 className="font-semibold">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("e", e);
              }}
            >
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span className="">First name</span>
                    <input
                      type="text"
                      placeholder="john"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <span>last name</span>
                    <input type="text" placeholder="doe" />
                  </div>
                </div>
                <div className="row50">
                  <div className="inputBox">
                    <span>email</span>
                    <input type="text" placeholder="johndeo@gmail.com" />
                  </div>
                  <div className="inputBox">
                    <span>mobile no</span>
                    <input type="text" placeholder="987654321" />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>message</span>
                    <textarea
                      name=""
                      placeholder="write your message"
                    ></textarea>
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <button
                      className=" hover:bg-black hover:text-white hover:rounded-md"
                      type="submit"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* Info */}
          <div className="contact info">
            <h3>contact info</h3>
            <div className="infoBox">
              <div>
                <span className="flex justify-center">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <p>cannaught palace , new delhi</p>
              </div>
              <div>
                <span className="flex justify-center">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <a href="mailto:loreminuyy@email.com">loreminuyy@email.com</a>
              </div>
              <div>
                <span className="flex justify-center ">
                  <i class="fa-solid fa-phone  "></i>
                </span>
                <a href="tel:5454545454">6565656565</a>
              </div>
              {/* social media links */}
              <ul className="sci">
                <li>
                  <a href="">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-snapchat"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <map  */}
           <div className="contact map" style={{width:'100%',padding:'0',display:'flex',justifyContent:'center',height:'100%'}}>
             <img src={`https://www.researchgate.net/profile/Vandana-Juyal/publication/265973728/figure/fig1/AS:670715145629698@1536922360149/Fig-1-Google-Map-of-New-Delhi-India.ppm`} alt="" />
            {/* <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28016.219825107986!2d77.19777734549325!3d28.628938543684942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1648706159939!5m2!1sen!2sin`}
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Contact;
