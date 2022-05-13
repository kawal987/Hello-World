import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditProfile from "../../MyComponents/EditProfile";
import "./index.css";

const myProfileArray = [
  {
    icon: <i className="fa-solid fa-wallet"></i>,
    listName: "My Wallet",
  },
  {
    icon: <i class="fa-solid fa-user"></i>,
    listName: "My Reward",
  },
  {
    icon: <i class="fa-solid fa-square-pen"></i>,
    listName: "My orders",
  },
  {
    icon: <i class="fa-solid fa-address-card"></i>,
    listName: "My profile",
  },
  {
    icon: <i class="fa-brands fa-cc-amazon-pay"></i>,
    listName: "My Payment",
  },
  {
    icon: <i class="fa-solid fa-star"></i>,
    listName: "My WishList",
  },
];

const MyProfile = ({ myProfileModal, setMyProfileModal }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { accountEx } = useParams();
  const navigate = useNavigate();
  //   const [array ,setCurrentArray]= useState([]);
  //   const [index, setIndex] = useState();
  //   const updateData =(prev)=>{

  // prev?.map((data,i)=>(i !== index? data :myProfileModal));}

  return myProfileModal || accountEx ? (
    <div className="w-full bg-gray-200 h-screen flex flex-col justify-center items-center">
      {/* <div>uyufuyfufu</div> */}
      <div
        id="modaBackgroundddd"
        className="w-full  flex justify-center  "
        style={{
          width: "100%",
          height: "600px",
          // backgroundColor: 'red',
          // animation: 'modalSlide 0.35s ease-in-out',
          // animationduration: "4s",
          // marginTop: "50px",
        }}
      >
        {myProfileModal || accountEx ? (
          <div className="w-4/5 bg-white flex " id="modalContainerrr">
            <div className="w-1/5 ml-5 mt-10">
              {myProfileArray?.map((listName) => (
                <ul className="bg-gray-50 pl-10">
                  <li className="flex px-5 py-2">
                    <div className="mr-4">{listName?.icon}</div>
                    <div>{listName?.listName}</div>
                  </li>
                </ul>
              ))}
              <button
                className=" w-full mt-3 bg-gray-50 flex pl-16 pt-2 pb-2"
                onClick={() => {
                  if (!accountEx) {
                    setMyProfileModal(false);
                  } else {
                    navigate("/");
                  }
                }}
              >
                <i className="fa-solid fa-house mr-3 pt-1"></i>Exit
              </button>
            </div>

            <div className="w-4/5 flex justify-center flex-col">
              <div className="w-full mb-5">
                <div className="flex justify-center">
                  <img
                    className="w-24 border border-gray-300 rounded-full  bg-white"
                    src={
                      "https://pngimg.com/uploads/businessman/businessman_PNG6562.png"
                    }
                    alt=""
                  />
                </div>
                <p className="w-full flex justify-center font-semibold">
                  John Nelson
                </p>
                <p className="w-full flex justify-center text-gray-700 font-sm">
                  New Delhi
                </p>
              </div>
              <div className="w-full border border-gray-200"></div>
              <div className="w-full justify-between flex pl-20 mt-5 pr-20">
                <button className=" bg-white px-2 py-2 rounded-md text-gray-800 font-semibold ">
                  My Profile
                </button>
                <button
                  className=" hover:scale-125 transition duration-700 ease-in-out bg-white px-2 py-2 rounded-md text-gray-800 font-semibold "
                  onClick={() => setIsEditModalOpen(true)}
                >
                  Edit Profile
                </button>
              </div>
              <div className="mt-5 w-full flex justify-center  ">
                <div className="w-4/5   ">
                  <div className=" w-full flex justify-between mb-5 ">
                    <div className="flex bg-white py-3 rounded-md  w-60">
                      <div className="mr-5 pl-4  ">
                        {" "}
                        <img
                          className="w-12 border border-gray-300 rounded-full  bg-white"
                          src={
                            "https://pngimg.com/uploads/businessman/businessman_PNG6562.png"
                          }
                          alt=""
                        />
                      </div>
                      <div>
                        <p className=" text-gray-700 font-semibold">
                          John Nelson
                        </p>
                        <p className="text-sm text-gray-700">New Delhi</p>
                      </div>
                    </div>
                    <div className="bg-white py-3  rounded-md w-60">
                      <p className="w-full flex justify-center">16</p>
                      <p className="w-full flex justify-center text-gray-700 font-semibold">
                        Your Order
                      </p>
                    </div>
                    <div className="bg-white w-60 py-3 rounded-md">
                      <p className="w-full flex justify-center">10</p>
                      <p className="w-full flex justify-center  text-gray-700 font-semibold">
                        Total
                      </p>
                    </div>
                  </div>
                  <div className="bg-white flex justify-between py-3 rounded-md px-6 ">
                    <div className="">
                      <p className="flex justify-center w-full font-semibold  text-gray-700">
                        First Name
                      </p>
                      <p className="text-gray-800">John </p>
                    </div>
                    <div className="">
                      <p className="flex justify-center w-full font-semibold  text-gray-700">
                        Last Name
                      </p>
                      <p className="text-gray-800">Nelson </p>
                    </div>
                    <div className="">
                      <p className="flex justify-center w-full font-semibold  text-gray-700">
                        Email
                      </p>
                      <p className="text-gray-800">JohnNelson@gmail.com</p>
                    </div>
                    <div>
                      <p className="flex justify-center w-full font-semibold  text-gray-700">
                        Phone No.
                      </p>
                      <p className="text-gray-800">9812345678</p>
                    </div>
                    <div className="">
                      <p className="flex justify-center w-full font-semibold  text-gray-700">
                        Address
                      </p>
                      <p className="text-gray-800">New Delhi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {isEditModalOpen && (
          <EditProfile
            setIsEditModalOpen={setIsEditModalOpen}
            editHeading={"Edit profile"}
          />
        )}
      </div>
    </div>
  ) : null;
};

export default MyProfile;
