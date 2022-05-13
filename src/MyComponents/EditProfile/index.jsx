import React, { useState } from "react";
import axios from "axios";
import Styles from "./index.module.css";

const EditProfile = (props) => {
  // const EditProfile: React.FC<ModalProps> = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const { setIsEditModalOpen, editHeading } = props;

  const onStartDateChange = (val) => {
    setSelectedDate(val);
  };

  // my <code></code>
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState("");
  console.log("lastNmae", address);
  console.log("name", firstName);
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   phoneNo: "",
  //   address: "",
  // });
  // console.log("phoneNo", data.address);
  // const handleChange = (e) => {
  //   console.log("e", e);
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };
  // const updateUser = (data) => {
  //   // console.log('data', data)
  //   axios
  //     .put(`https://reqres.in/api/users/2`, data)
  //     .then((res) =>
  //     // setData (res?.data))
  //      console.log("res", res))

  //     .catch((err) => console.log("err", err));
  // };

  return (
    <div className={Styles["modalBackground"]}>
      <div className={Styles["modalContainer"]}>
        <div
          className={Styles["titleCloseBtn"]}
          title="Close button"
          onClick={() => setIsEditModalOpen(false)}
        >
          {/* <img src={CloseIcon} alt="Cross icon" /> */}
        </div>
        <div className={Styles["title"]}>
          <h1 className={`${Styles?.page_heading}`}>{editHeading}</h1>
        </div>

        {/* <div>Your data</div> */}
        <form
          className="w-full flex flex-col justify-evenly "
          onFinish={(values) => console.log("values", values)}
        >
          <div className="flex w-full justify-evenly">
            <div className="">
              <label
                className="mr-3 font-semibold text-gray-700"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <br></br>
              <input
                className="border border-gray-600 pl-2 rounded-md py-1 mt-2 px-16"
                onChange={(e) => {
                  setFirstName(e?.target?.value);
                }}
                value={firstName}
                type="text"
                id="firstName"
                placeholder="Enter first name"
              />
            </div>
            <div className="ml-10 ">
              <label
                className="mr-3 font-semibold text-gray-700 "
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <br></br>
              <input
                className="border border-gray-600 pl-2 mt-2 rounded-md py-1 px-16"
                type="text"
                name="lastName"
                // class={lastName}
                placeholder="Enter last name "
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full justify-evenly mt-8">
            <div>
              <label htmlFor="email">Email</label>
              <br></br>

              <input
                className="border border-gray-600 pl-2 mt-2 rounded-md py-1 px-16"
                type="text"
                name="email"
                placeholder="New Delhi"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="ml-10">
              <label htmlFor="Contact No">Contact No.</label>
              <br></br>
              <input
                onChange={(e) => setContact(e.target.value)}
                className="border border-gray-600 pl-2 mt-2 rounded-md py-1 px-16"
                type="text"
                name="Contact No"
                placeholder="**********"
                value={contact}
              />
            </div>
          </div>
          <div className=" mt-8 ml-8 w-full justify-center">
            <label htmlFor="address">Address</label>
            <br></br>
            <input
              className="border border-gray-600 pl-2 mt-2 rounded-md py-1 w-11/12"
              type="text"
              name="address"
              placeholder="Enter email"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
        </form>
        <div className={Styles["button_style"]} style={{ marginTop: "40px" }}>
          <button
            type="ghost"
            size="medium"
            onClick={() => {
              setIsEditModalOpen(false);
            }}
            style={{ margin: 0 }}
          >
            Cancel
          </button>
          <button
            type="primary"
            htmlType="submit"
            size="medium"
            onClick={(prev) => {
              // setFirstName([...prev, firstName]);
              setIsEditModalOpen(false);
            }}
            style={{ margin: 0 }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
