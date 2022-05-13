import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import OurTopBrands from "./OurTopBrands";
import { useNavigate,  } from "react-router-dom";


const AboutUs = ({arrayOnTopBrands,arrayOnWhyChooseUs}) => {
  // const {id} = useParams()
  const navigate =useNavigate()
  return (
    
      <div className="w-full  ">
        <div className=" bg-gray-100 py-3 border-y border-gray-300 w-full">
          <div className="flex  mx-40 w-4/5 justify-between items-center">
            <div className="mr-40 text-3xl font-semibold text-gray-900">
              About Us
            </div>
            <div className="flex w-72 justify-evenly ">
              <div className="pointer" onClick={()=> navigate("/")}>Home</div>
              <div className="text-xl">
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div className="">About</div>
              <div className="text-xl">
                {/* <i class="fa-solid fa-angle-right"></i> */}
              </div>
              {/* <div className="text-gray-500" onClick={()=> navigate("/product/:${id}")}>Product Details</div> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-4/5 flex justify-center flex-col mt-6 mb-14">
            <p className=" mb-4 text-2xl text-gray-800 font-semibold">
              Our Story
            </p>
            <p className="text-base mb-3 text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="text-base mb-3 text-gray-800">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <p className="text-base mb-3 text-gray-800">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
        </div>
        <WhyChooseUs arrayOnWhyChooseUs={arrayOnWhyChooseUs} />
      <OurTopBrands arrayOnTopBrands={arrayOnTopBrands}/>
      </div>
     
    
  );
};

export default AboutUs;
