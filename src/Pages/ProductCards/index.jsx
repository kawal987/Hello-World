import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../MyComponents/Loading";
import EmptyState from "../../MyComponents/EmptyState";
// import ElectronicsCards from "../ElectronicsCards/index";
// import SliderOfItems from "../SliderOfItems/index";
// import SlideDrawer from "../../MyComponents/NewDrawer/SlideDrawer/SlideDrawer";
// import MotionHoc from "../MotionHoc";
import "./Style.css";
// import { useEffect } from "react/cjs/react.production.min";
const ProductCards = ({
  // filterItem,
  setFilterItem,
  currentState,
  // SingleProduct,
  // setvisibleState,
  setCurrentState,
  getCategory,
  getData,
  // newArr
}) => {
  const [loading, setLoading] = useState(false);
  const { cate } = useParams();
  // const [currentState, setCurrentState] = useState([]);

  //  const filterjewelery = currentState?.filter((mensItems)=> mensItems?.category === "jewelery") ;
  // console.log('filterjewelery', filterjewelery);
  // const filterWomenClothing = currentState?.filter((womensItems)=> womensItems?.category === "women's clothing") ;
  // console.log('filterWomenClothing', filterWomenClothing)
  // const filtermenClothing = currentState?.filter((mensItems)=> mensItems?.category === "men's clothing") ;
  // console.log('filtermenClothing', filtermenClothing)

  // console.log('filterItem', filterItem)
  // console.log("currentState", currentState);
  // const card = (id) =>
  //   setCurrentState(
  //     currentState.map((item) => {
  //       if (id === item?.id) {
  //         return { ...item, addedToCart: true };
  //       } else {
  //         return { ...item };
  //       }
  //     })
  //   );

  // const getData = () => {
  //   axios
  //     .get(`https://fakestoreapi.com/products`)
  //     .then((response) => {
  //       if (response?.data?.length > 0) {
  //         // added new item in previous array jehra data
  //         //  get kita ode te map chalaya te return ch  spread
  //         //  kita item nu te iose ch ik new item add kiti added to card:false
  //         const newArr = response?.data?.map((item) => {
  //           return { ...item, addedToCart: false };
  //         });
  //         // console.log("newArr", newArr);
  //         setCurrentState(newArr);
  //         setLoading(false);
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  //   // setvisibleState(false);
  // };
  // useEffect(() => {
  //   setLoading(true);
  //   getData();
  // }, []);

  const navigate = useNavigate();
  console.log("currentState", currentState);
  useEffect(() => {
    if (cate) getCategory(cate);
    else getData();
  }, [cate]);

  return (
    <div className="w-full">
      <Loading spinning={loading}>
        <div className="CardMain">
          {currentState.length < 10 && (
            <div className="w-full mb-14">
              <div className=" bg-gray-100 py-3 border-y border-gray-300 w-full flex justify-center">
                <div className="flex  mx-20  w-full justify-between items-center">
                  <div className="mr-40 text-3xl font-semibold text-gray-900">
                    Categories
                  </div>
                  <div className="flex w-72 justify-evenly ">
                    <div className="pointer" onClick={() => navigate("/")}>
                      Home
                    </div>
                    <div className="text-xl">
                      <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="">Category</div>
                    <div className="text-xl">
                      {/* <i class="fa-solid fa-angle-right"></i> */}
                    </div>
                    {/* <div className="text-gray-500" onClick={()=> navigate("/product/:${id}")}>Product Details</div> */}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="grid ">
            <EmptyState input={currentState}>
              {currentState?.map((item) => (
                <div
                  className="grid-items cursor-pointer bg-white relative  hover:scale-105 transition duration-700 ease-in-out hover:z-99"
                  onClick={() => {
                    //  SingleProduct(item?.id)
                    navigate(`/product/${item?.id}`);
                  }}
                >
                  {/* <div className="fa absolute right-4 top-4">
                <i className="fa-solid fa-heart bg-red-200"></i>
              </div>  */}

                  <div className="image">
                    <img src={item?.image} alt="" />
                  </div>
                  <div className="">
                    <div className="category ">{item?.category}</div>
                    <div className="Product-name">Product Short Name</div>
                    <div className="price">
                      <del className="price-del">{`${Math.floor(
                        Math.random() * 200 + 100
                      )}$`}</del>
                      &nbsp; ${item?.price}
                    </div>
                    <div>{item?.rating?.rate}</div>
                    <div>
                      {item.addedToCart === false ? (
                        <button
                          className="bg-black text-white py-1 px-7 rounded-md"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentState(
                              currentState?.map((cart) => {
                                if (item?.id === cart?.id) {
                                  return { ...cart, addedToCart: true };
                                } else {
                                  return { ...cart };
                                }
                              })
                            );
                            const filterData = currentState?.filter(
                              (data) => data?.id === item?.id
                            );
                            // console.log('filterData', filterData)
                            setFilterItem((prev) => [...prev, ...filterData]);
                          }}
                        >
                          ADD TO CARD
                        </button>
                      ) : (
                        <button className="bg-white text-black border border-black  py-0.5 px-3 rounded-md">
                          {" "}
                          <i className="fa-solid fa-check text-green-600  "></i>
                          ADDED TO CARD
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </EmptyState>
          </div>
          {/* <SlideDrawer filterItem={filterItem} /> */}
        </div>
      </Loading>
      {/* <SliderOfItems /> */}
      {/* <ElectronicsCards currentState={currentState}/> */}
    </div>
  );
};

// const ProductCards = MotionHoc(ProductCardsComponent);

export default ProductCards;
