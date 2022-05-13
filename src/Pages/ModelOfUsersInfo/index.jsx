import React, { useState, useEffect } from "react";
import axios from "axios";

const picArrary = [
  {
    id: 1,
    pic: "https://pngimg.com/uploads/student/student_PNG104.png",
  },
  {
    id: 2,
    pic: "https://pngimg.com/uploads/businessman/businessman_PNG6562.png",
  },
  {
    id: 3,
    pic: "https://www.nicepng.com/png/full/231-2318629_asian-business-woman-png-png.png",
  },
  {
    id: 4,
    pic: "https://www.pngall.com/wp-content/uploads/2018/04/Businessman-Free-PNG-Image.png",
  },
  {
    id: 5,
    pic: "https://www.pngall.com/wp-content/uploads/2018/04/Businessman-PNG-Image.png",
  },
  {
    id: 6,
    pic: "https://www.pngall.com/wp-content/uploads/2018/04/Businessman-Free-PNG-Image.png",
  },
  {
    id: 7,
    pic: "https://www.nicepng.com/png/full/256-2564004_girl-with-tablet-png.png",
  },
  {
    id: 8,
    pic: "https://pngimg.com/uploads/student/student_PNG104.png",
  },
  {
    id: 9,
    pic: "https://www.pngall.com/wp-content/uploads/2018/04/Businessman-PNG-Picture.png",
  },
  {
    id: 10,
    pic: "https://www.nicepng.com/png/full/231-2318629_asian-business-woman-png-png.png",
  },
];
const ModelOfUsersInfo = ({ currentState, setCurrentState }) => {
  // const deleteUser = (id) => {
  //   axios
  //     .delete(`https://fakestoreapi.com/products/${id}`)
  //     .then((response) => {
  //       // setCurrentData((prv) => [...prv, response?.data]);
  //       // setModalVisible(false);
  //       if (response?.status === 204) {
  //         setCurrentState(currentState?.filter((item) => item?.id !== id));
  //       }
  //       console.log("response", response);
  //     })
  //     .catch((error) => alert("Something went wrong "));
  // };
  // useEffect(() => {
  //   deleteUser();
  // }, []);
  const [userInfo, setUserInfo] = useState([]);
  const [updatedArray, setUpdatedArray] = useState([]);
  // console.log("userInfo" , userInfo)
  // console.log("updatedArray", updatedArray);
  const getUser = () => {
    axios
      .get(`https://fakestoreapi.com/users`)
      .then((response) => {
        if (response?.data?.length > 0) {
          // console.log('200000000')
          //array merging
          let mergedArray = response?.data?.map((item, index) => {
            let newItem = {};

            picArrary?.map((pics, idx) => {
              // newItem = { ...item, ...pics };
              if (item?.id === pics?.id) {
                newItem = { ...item, ...pics };
              }
              //   else {
              //     newItem = item;
              //   }
            });

            return newItem;
          });
          setUpdatedArray(mergedArray);
          // console.log('mergedArray', mergedArray)
        }
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    // if (userModal === true) {
    getUser();
    // }

    // setUserModal(true)
  }, []);

  return (
    <>
      (
      <div
        style={{ zIndex: "10000" }}
        className="fixed overflow-hidden bg-white w-full  top-0 flex justify-center items-center  h-screen "
      >
        <div className="w-4/5 h-screen overflow-y-auto rounded-md border bg-white">
          {/* <div
              className="pointer"
              onClick={() => {
            
              }}
            >
              go back
            </div> */}

          <div
            style={{
              display: "grid",
              gridColumn: "3",
              rowGap: "30px",
              columnGap: "10px",
              gridTemplateColumns: "auto auto auto",
              width: "100%",
              overflowX: "hidden",
              width: "100%",
            }}
          >
            {updatedArray?.map((info) => (
              <div className="w-96 bg-gray-100  rounded-md ml-0 bg-fuchsia-100 pb-10 ">
                <div
                  style={{
                    marginBottom: "0",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className="bg-gradient-to-r from-violet-300 to-fuchsia-300 pt-10 rounded-md "
                >
                  {/* <div onclick={() => deleteUser(info?.id)}>gggggggggg</div> */}
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100%",
                      padding: "15px",
                      marginBottom: "-40px",
                      backgroundColor: "white",
                    }}
                    className="w-40 border border-fuchsia-300 shadow-md shadow-fuchsia-500"
                    src={info.pic}
                    alt=""
                  />
                </div>
                <div className="mt-12 flex justify-center flex-col w-full ml-16">
                  {" "}
                  <div className="mb-1">
                    <span className="font-semibold">Name :</span>{" "}
                    {info?.name?.firstname} {info?.name?.lastname}
                  </div>
                  <div className="mb-1 ">
                    <span className="font-semibold ">Address : </span>{" "}
                    {info?.address?.city} , {info?.address?.street}
                  </div>
                  {/* <div></div> */}
                  <div className="mb-1">
                    <span className="font-semibold">Email :</span>
                    {info?.email}
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold">Zip-Code :</span>{" "}
                    {info?.address?.zipcode}
                  </div>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelOfUsersInfo;
