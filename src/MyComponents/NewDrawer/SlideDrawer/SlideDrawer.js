import "./SlideDrawer.css";

const SlideDrawer = ({ show, uri, setDrawerOpen, headingName, filterItem }) => {
  console.log("side drawer data", filterItem);
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div className={drawerClasses}>
      <div
        style={{
          // backgroundColor: "#19434c",
          backgroundColor: "#b3b1af",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 20px 20px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize:'20px'
          }}
        >
          SHOPPING CART
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-filetype-pdf"
            viewBox="0 0 16 16"
            style={{
              color: "white",
              fontSize: "25",
              fontWeight: 200,
              marginTop: "3px",
            }}
          >
            <path
              fill-rule="evenodd"
              d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
            />
          </svg> */}
          <p style={{ color: "white", fontSize: "35", marginLeft: "15px" }}>
            {headingName}
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg pointer"
          viewBox="0 0 16 16"
          style={{
            color: "black",
            fontSize: "50",
            fontWeight: 200,
            marginTop: "3px",
          }}
          onClick={() => setDrawerOpen(false)}
        >
          <path
            fill-rule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fill-rule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
      </div>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection:'column',
          justifyContent: "space-evenly",
          // overflow:'scroll',
        
        
        }}
      >
        {filterItem?.length > 0 &&
          filterItem?.map((items) => (
            <div style={{ width: "100%" ,}}>
              <div
                style={{
                  display: "flex",
         
                  width: "100%",
                  // overflowY:'hidden',
                  // backgroundColor: "pink",
                  justifyContent: "space-evenly",
                  // borderTop: "1px solid #a6a5a4",
                  borderBottom: "1px solid #a6a5a4",
                  padding: "10px 0 10px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // backgroundColor: "blue",
                    width: "15%",
                    height:'10%',
                    justifyContent: "center",
                    alignContent:'center'
                  }}
                >
                  <img  style={{display:'flex',alignContent:'center',justifyContent:'center'}} src={items?.image} alt="" />
                </div>
                <div
                  style={{
                    width: "60%",
                  }}
                >
                  <div style={{fontSize:'15px',fontWeight:'bolder'}}>{items?.title}</div>
                  <div style={{fontSize:'10px',marginTop:'5px',marginBottom:'5px',color:'#1c5e19'}}>In Stock</div>
                  <div  style={{fontSize:'10px',marginBottom:'5px', color:'#5d5e5d'}}>Sold by <span style={{color:'#1c5e19'}}>SARAF-INDIA</span> </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <img
                        style={{ width: "25px" }}
                        src={`https://m.media-amazon.com/images/G/31/easyship-SVDRVS/amazon-delivered-DSVVSR._CB485933315_.png`}
                        alt=""
                      />
                    </div>
                    <div  style={{fontSize:'12px',marginTop:'3px',marginLeft:'3px',color:'#5d5e5d'}}>Company Delivered</div>
                  </div>
                  <div className="mr-5 ">
                    <label className="mr-3">Qty:</label>
                    <select
                      className=" justify-center px-3 mt-2 border border-gray-200"
                      name="cars"
                      id="cars"
                    >
                      <option value="volvo">1</option>
                      <option value="saab">2</option>
                      <option value="opel">3</option>
                      <option value="audi">4</option>
                      <option value="audi">5</option>
                      <option value="audi">6</option>
                      <option value="audi">7</option>
                      <option value="audi">8</option>
                      <option value="audi">9</option>
                      <option value="audi">10</option>
                  
                    </select>
                  </div>
                </div>
                <div
                  style={{
                    width: "12%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rs.{items?.price}
                </div>
              </div>
              {/* <div style={{display:'flex',justifyContent:'center'}}>
<div style={{width:'95%',borderBottom:'2px solid #a6a5a4',marginTop:'10px',display:'flex',justifyContent:'center'}}></div>
</div> */}
            </div>
          ))}
      </div>

      {/* <iframe
        title="Document Preview"
        src={uri}
        style={{ height: "100vh", width: "100%", textAlign: "center" }}
        frameBorder="0"
        allowFullScreen
      /> */}
    </div>
  );
};

export default SlideDrawer;
