import React from "react";

const FirstComponent = ({ match }) => {
  console.log("match", match);
  return (
    match && (
      <div className="mb-14 w-full mt-20  ">
        <div className="w-full flex justify-center my-11 bg-gray-200">
          <div className="w-4/5 flex ">
            <div className="w-full flex justify-center">
              <div className="w-1/2 pt-52 pl-10">
                <p className="text-2xl mb-4">Hurry Up ! Limited Time Offer</p>
                <p className="text-4xl mb-4">Women Sportware Sale</p>
                <p className="text-sm mb-4">
                  Sneakers , keds, Sweatshirts, Hoodies {`&`} much more...
                </p>
                <button className="bg-black text-white py-1 px-2 rounded-md">
                  SHOP NOW
                </button>
              </div>
              <div className="w-1/2 flex justify-center ">
                <img
                  src={`https://codervent.com/shopingo/demo/assets/images/slider/05.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5 flex  ">
            <div className="w-full flex p-3 ">
              <div className="w-10 flex justify-center items-center">
                <i
                  className="fa-solid fa-taxi"
                  style={{
                    width: "80px",
        
                  }}
                ></i>
              </div>
              <div>
                <p>FREE SHIPPING & RETURN</p>
                <p className="text-sm">Free shipping on all orders over $49</p>
              </div>
            </div>
            <div className="w-full flex p-3 ">
              <div className="w-10 flex justify-center items-center">
                <i class="fa-solid fa-dollar-sign"></i>
              </div>
              <div>
                <p>MONEY BACK GUARANTEE</p>
                <p>100% money back guarantee</p>
              </div>
            </div>
            <div className="w-full flex p-3">
              <div className="w-10 flex justify-center items-center">
                <i class="fa-solid fa-taxi"></i>
              </div>
              <div>
                <p>ONLINE SUPPORT 24/7</p>
                <p>Awesome Support for 24/7 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FirstComponent;
