import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../MyComponents/Loading";
import Description from "./Description";
import EmptyState from "../../MyComponents/EmptyState";
const ProductDetail = ({
  getSingleProduct,
  SingleProduct,
  visible,
  singleLoading,
  setSingleLoading,
}) => {
  const { productId } = useParams();
  useEffect(() => {
    if (productId) {
      SingleProduct(productId);
      setSingleLoading(true);
    }
  }, []);
  const navigate = useNavigate();
  // console.log("getSingleProduct", getSingleProduct);
  return (
    <>
      <Loading spinning={singleLoading}>
        {/* <EmptyState input={SingleProduct}> */}
        <div className="w-full bg-white ">
          <div className=" bg-gray-100 py-3 border-y border-gray-300 w-full">
            <div className="flex  mx-40 w-4/5 justify-between items-center">
              <div className="mr-40 text-3xl font-semibold text-gray-900">
                Allen Solly
              </div>
              <div className="flex w-72 justify-evenly ">
                <div className="">Home</div>
                <div className="text-xl">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className="">Shop</div>
                <div className="text-xl">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className="text-gray-500">Product Details</div>
              </div>
            </div>
          </div>

          <div className="flex  w-4/8 mt-10 ">
            <div className="flex  w-full justify-center">
              <div className="w-2/5 flex justify-center items-center border border-gray-200 py-7">
                <img
                  className="h-96 w-80"
                  src={getSingleProduct?.image}
                  alt=""
                />
              </div>

              <div className="w-2/5  pb-5  pl-5">
                <div className="text-2xl font-semibold text-gray-900 pt-5">
                  Allen Solly
                </div>
                <div className="flex mt-3 mb-3">
                  <div className="text-yellow-400 text-sm">
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="text-yellow-400 text-sm">
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="text-yellow-400 text-sm">
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="text-yellow-400 text-sm">
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="text-sm">
                    <i class="fa-solid fa-star">
                      {" "}
                      (<span className="text-xs ml-2">24 Ratings </span>)
                    </i>
                  </div>
                </div>
                <div className="text-2xl font-semibold mb-3 mt-3">
                  {" "}
                  <del className="text-xl font-semibold">$99.9</del> $
                  {getSingleProduct?.price}
                </div>
                <div className="mb-1 mt-3 font-semibold">Description:</div>
                <div className=" mb-3 text-base">
                  {getSingleProduct?.description}
                </div>
                <div className="flex">
                  <div className="font-bold mr-16">Product id</div>
                  <div>#BHU5879</div>
                </div>
                <div className="flex">
                  <div className="font-bold mr-20">Delivery</div>
                  <div>Russia, USA, and Europe</div>
                </div>

                <div className="flex mt-5">
                  <div className="flex">
                    <div className="mr-5 ">
                      <label className="">Quantity</label>
                      <select
                        className="flex justify-center px-3 mt-2 border border-gray-200"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">1</option>
                        <option value="saab">2</option>
                        <option value="opel">3</option>
                        <option value="audi">4</option>
                        <option value="audi">5</option>
                      </select>
                    </div>

                    <div className="mr-5">
                      <label>Size</label>
                      <select
                        className="flex justify-center  mt-2 border border-gray-200"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">S</option>
                        <option value="saab">M</option>
                        <option value="opel">L</option>
                        <option value="audi">XS</option>
                        <option value="audi">XL</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div>Colors</div>
                    <div className="flex mt-2">
                      <div className="w-6 h-6 bg-blue-600 mr-2 "></div>
                      <div className="w-6 bg-red-600  mr-2"></div>
                      <div className="w-6 bg-green-600  mr-2"></div>
                      <div className="w-6 bg-yellow-400  mr-2"></div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-5">
                  <div className="border flex border-gray-200 py-2 px-2 text-xs font-semibold mr-3">
                    <div className="pr-2 ">
                      <i class="fa-solid fa-cart-plus"></i>{" "}
                    </div>
                    <div>ADD TO CARD</div>
                  </div>
                  <div className=" ">
                    <button
                      className="border border-gray-200 py-2 px-2 flex justify-center text-xs bg-gray-50 font-semibold"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      BACK TO HOME
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/8 flex justify-center">
            <div className="w-2/5 flex justify-center  mt-4">
              <div>
                <img
                  className="h-24 w-24 mr-2 border border-gray-200 py-4 px-4 "
                  src={getSingleProduct?.image}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 w-24  mr-2 border border-gray-200 py-4 px-4"
                  src={getSingleProduct?.image}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 w-24  mr-2 border border-gray-200 py-4 px-4"
                  src={getSingleProduct?.image}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 w-24  mr-2 border border-gray-200 py-4 px-4 "
                  src={getSingleProduct?.image}
                  alt=""
                />
              </div>
            </div>
            <div className="w-2/5 border-t mt-4"></div>
          </div>
          <Description />
        </div>
        {/* </EmptyState> */}
      </Loading>
    </>
  );
};

export default ProductDetail;
