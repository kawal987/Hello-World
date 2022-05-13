import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();
  const [CustomerSatisfied, setCustomerSatisfied] = useState(0);
  const [soldProducts, setsoldProducts] = useState(0);
  const [globalCustomer, setGlobalCustomer] = useState(0);
  const [feedBack, setFeedBack] = useState(0);
  useEffect(() => {
    if (CustomerSatisfied < 10000) {
      setCustomerSatisfied(CustomerSatisfied + 1);
    }
    if (soldProducts < 11950) {
      setsoldProducts(soldProducts + 1);
    }
    if (globalCustomer < 28950) {
      setGlobalCustomer(globalCustomer + 1);
    }
    if (feedBack < 950) {
      setFeedBack(feedBack + 1);
    }
  }, [CustomerSatisfied, soldProducts, globalCustomer]);
  return (
    <div style={{ width: "100%" }}>
      <div className=" bg-gray-100 py-3 border-y border-gray-300 w-full">
        <div className="flex  mx-40 w-4/5 justify-between items-center">
          <div className="mr-40 text-3xl font-semibold text-gray-900">
            Services
          </div>
          <div className="flex w-40 justify-evenly ">
            <div className="pointer" onClick={() => navigate("/")}>
              Home
            </div>
            <div className="text-xl">
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="text-gray-500">Services </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/2489626.jpg')",
          width: "100%",

          height: "450px",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "40px",
          textShadow: "2px 3px  gray",
        }}
      >
        SERVICES
      </div>
      <div className="w-full justify-center flex mt-20">
        <div
          style={{
            width: "80%",
            backgroundColor: "#ebeae8",
            display: "flex",
            justifyContent: "space-evenly",
            padding: "40px 20px 40px 20px",
          }}
        >
          <div>
            <div className="flex mb-2 ">
              <div className="text-2xl ml-9">
                <i class="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="ml-10 font-bold text-2xl">
                {CustomerSatisfied}
              </div>
            </div>

            <p style={{ fontSize: "23px", fontWeight: "bold" }}>
              {" "}
              Customers Satisfied
            </p>
          </div>
          <div>
            <div className="flex mb-2">
              <div className="text-2xl ml-4 ">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <div className="ml-10 font-bold text-2xl ">{globalCustomer}</div>
            </div>

            <p style={{ fontSize: "23px", fontWeight: "bold" }}>
              Global Customers{" "}
            </p>
          </div>
          <div>
            <div className="flex mb-2">
              <div className="text-2xl">
                <i class="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="ml-10 font-bold text-2xl">{soldProducts}</div>
            </div>

            <p style={{ fontSize: "23px", fontWeight: "bold" }}>
              Sold Products{" "}
            </p>
          </div>
          <div>
            <div className="flex mb-2">
              <div className="text-2xl">
                <i class="fa-solid fa-pen"></i>
              </div>
              <div className="ml-10 font-bold text-2xl">{feedBack}</div>
            </div>

            <p style={{ fontSize: "23px", fontWeight: "bold" }}>FeedBack </p>
          </div>
        </div>
      </div>

      <div className="w-full justify-center  flex">
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "100px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "20%",

              paddingLeft: "20px",
              paddingRight: "20px",
              marginTop: "20px",
            }}
          >
            {/* <p><span style={{width:'20px',height:'10px' , backgroundColor:'red'}}></span>OUR SERVICES</p>
              <p></p> */}
            <div className="flex justify-start items-center   ">
              <div
                style={{
                  width: "50px",
                  height: "3px",
                  backgroundColor: "purple",
                  marginRight: "10px",
                }}
              ></div>
              <div>OUR SERVICES</div>
            </div>
            <p style={{ fontSize: "25px" }}>What To Do</p>
            <p
              style={{ fontSize: "15px", color: "gray", marginBottom: "20px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio
              architecto delectus sunt beatae harum illo itaque, accusantium,
              rerum quos cum consectetur?
            </p>
            <p style={{ fontSize: "15px", color: "gray" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati doloremque inventore, quidem incidunt animi aut
              accusantium sit deserunt optio dolores repudiandae! Quis omnis
              aspernatur consequuntur consequatur ut neque, exercitationem non!
            </p>
          </div>

          <div style={{ display: "flex", width: "65%" }}>
            <div style={{ marginLeft: "30px" }}>
              <img
                style={{ width: "500px" }}
                src={`https://demoxml.com/html/maxmovers/assets/images/srv-1.jpg`}
                alt=""
              />
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "10px",
                  marginBottom: "7px",
                }}
              >
                AUTO TRANSPORT
              </p>
              <p style={{ fontSize: "15px", color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit architecto nesciunt placeat, asperiores similique
                ad consectetur magnam sunt? Iste dolorem ullam magnam.
              </p>
            </div>
            <div style={{ marginLeft: "30px", marginRight: "30px" }}>
              <img
                style={{ width: "100%" }}
                src={`https://demoxml.com/html/maxmovers/assets/images/srv-2.jpg`}
                alt=""
              />
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "10px",
                  marginBottom: "7px",
                }}
              >
                MOVING & STORAGE
              </p>
              <p style={{ fontSize: "15px", color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam corrupti nulla ducimus dignissimos suscipit. Maiores
                et officia aperiam obcaecati possimus aliquid optio.
              </p>
            </div>
            <div style={{}}>
              <img
                style={{ width: "100%" }}
                src={`https://demoxml.com/html/maxmovers/assets/images/srv-3.jpg`}
                alt=""
              />
              <div style={{ padding: "0 20px 0 20px" }}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    marginTop: "10px",
                    marginBottom: "7px",
                  }}
                >
                  PACKING
                </p>
                <p style={{ fontSize: "15px", color: "gray" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Error voluptatibus inventore dignissimos repellat nam autem
                  itaque, soluta, quam ut aperiam iusto nostrum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
