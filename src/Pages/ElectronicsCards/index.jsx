import React  from "react";

// import { useParams,useEffect } from "react-router-dom";
import "./style.css";
const ElectronicsCards = ({ currentState }) => {
  const filterElectronic = currentState?.filter(
    (cardItems) => cardItems?.category === "electronics"
  );
  // console.log("filterElectronic", filterElectronic);
  //  const { cate } = useParams();
  // console.log("cate", cate);

  // useEffect(() => {
   
  // }, [cate])
  
  return (
    <div className="main-Electronic">
      
      <div className="sub-electronic">
        {filterElectronic?.map((electronicItems) => (
          <div className="electronic-cards">
            <img
              className="img-electronic"
              src={electronicItems?.image}
              alt=""
            />
            <div className="details">
              {" "}
              <p className="category">{electronicItems?.category}</p>
              <p className="text-gray-800">Product short name</p>
              <div className="price">
                <del className="price-del">{`${Math.floor(
                  Math.random() * 200 + 100
                )}$`}</del>
                &nbsp; ${electronicItems?.price}
              </div>
              <div>{electronicItems?.rating?.rate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsCards;
