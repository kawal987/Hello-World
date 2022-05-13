import React from "react";

const SkeletonCards = () => {
  return (
      <div className="">
    <div className="w-full flex justify-evenly mt-64">
      <div className="w-1/5 flex justify-center bg-gray-100">
        <div className="w-full flex flex-col justify-center border border-gray-200 rounded-md ">
          <div className="w-full flex justify-center ">
            <img
              className="w-44"
              src={`https://as1.ftcdn.net/v2/jpg/03/45/05/92/1000_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg`}
              alt=""
            />
          </div>
          <div className="w-full  mt-5 flex justify-center ">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              Category Name
            </p>
          </div>
          <div className="w-full  mt-2 flex justify-center ">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              Product Short Name
            </p>
          </div>
          <div className="w-full  mt-2 flex justify-center items-center pb-5">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              {" "}
              <del>$000.00</del> <span className="ml-3">$00.00</span>{" "}
            </p>
            <p className="ml-8 text-white ">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
          </div>
        </div>
        
      </div>


      <div className="w-1/5 flex justify-center">
        <div className="w-full flex flex-col justify-center border border-gray-200 rounded-md ">
          <div className="w-full flex justify-center ">
            <img
              className="w-44"
              src={`https://as1.ftcdn.net/v2/jpg/03/45/05/92/1000_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg`}
              alt=""
            />
          </div>
          <div className="w-full  mt-5 flex justify-center ">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              Category Name
            </p>
          </div>
          <div className="w-full  mt-2 flex justify-center ">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              Product Short Name
            </p>
          </div>
          <div className="w-full  mt-2 flex justify-center items-center pb-5">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              {" "}
              <del>$000.00</del> <span className="ml-3">$00.00</span>{" "}
            </p>
            <p className="ml-8 text-gray-100 ">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
          </div>
        </div>
        
      </div>


      <div className="w-1/5 flex justify-center bg-white rounded-md">
        <div className="w-full flex flex-col justify-center border border-gray-200 rounded-md ">
          <div className="w-full flex justify-center ">
            <img
              className="w-44"
              src={`https://haryana.gov.in/wp-content/themes/sdo-theme/images/default/image-gallery.jpg`}
              alt=""
            />
          </div>
          <div className="w-full  mt-5 flex justify-center ">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              Category Name
            </p>
          </div>
          <div className="w-full  mt-3 flex justify-center ">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              Product Short Name
            </p>
          </div>
          <div className="w-full  mt-5 flex justify-center items-center pb-5">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              {" "}
              <del>$000.00</del> <span className="ml-3">$00.00</span>{" "}
            </p>
            <p className="ml-8 text-gray-100 ">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
          </div>
        </div>
        
      </div>
      <div className="w-1/5 flex justify-center bg-gray-100">
        <div className="w-full flex flex-col justify-center border border-gray-200 rounded-md ">
          <div className="w-full flex justify-center  ">
            <img
              className="w-44  rounded-md  "
              src={`https://haryana.gov.in/wp-content/themes/sdo-theme/images/default/image-gallery.jpg`}
              alt=""
            />
          </div>
          <div className="w-full  mt-5 flex justify-center ">
            <p className=" px-1 border border-gray-100 rounded-full text-gray-100 py-1 bg-white">
              Category Name
            </p>
          </div>
          <div className="w-full  mt-3  flex justify-center ">
            <p className=" px-1 border border-gray-100 rounded-full text-gray-100 py-1 bg-white">
              Product Short Name
            </p>
          </div>
          <div className="w-full  mt-5 flex justify-center items-center pb-5">
            <p className=" px-1 border border-gray-100 rounded-full text-white py-1 bg-gray-100">
              {" "}
              <del>$000.00</del> <span className="ml-3">$00.00</span>{" "}
            </p>
            <p className="ml-8 text-white  ">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default SkeletonCards;
