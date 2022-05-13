import React from "react";
import SlideDrawer from "./SlideDrawer/SlideDrawer.js";
import Backdrop from "./SlideDrawer/Backdrop.js";

const Drawer = ({ drawerOpen, setDrawerOpen, uri, headingName , filterItem}) => {
  let backdrop;
  if (drawerOpen) {
    backdrop = <Backdrop setDrawerOpen={setDrawerOpen} />;
  }
  return (
    <div>
      <SlideDrawer
        show={drawerOpen}
        uri={uri}
        setDrawerOpen={setDrawerOpen}
        headingName={headingName}
        filterItem={filterItem}
      />
      {backdrop}
    </div>
  );
};

export default Drawer;
