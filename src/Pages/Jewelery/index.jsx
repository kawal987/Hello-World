import React from "react";
import "./Style.css";
const Jewelery = ({ currentState }) => {
  // console.log('currentStategg', currentState)
  const filterjewelery = currentState?.filter(
    (jewelerItems) => jewelerItems?.category === "jewelery"
  );
  //   console.log('filterjewelery', filterjewelery)
  return (
    <div className="mainjJwelery">
      <div className="subJewelery">
        {filterjewelery?.map((JeweleryItems) => (
          <div className="jeweleryCards">
            <img className="imgJewelery" src={JeweleryItems?.image} alt="" />
            <div className="detailsJewelery">
              {" "}
              <p className="categoryJewelery">{JeweleryItems?.category}</p>
              <p className="text-gray-800">Product short name</p>
              <div className="price">
                <del className="price-del">{`${Math.floor(
                  Math.random() * 200 + 100
                )}$`}</del>
                &nbsp; ${JeweleryItems?.price}
              </div>
              <div>{JeweleryItems?.rating?.rate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jewelery;
