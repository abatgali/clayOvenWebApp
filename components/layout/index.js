import React from "react";
import Navigation from "../navigation";

const NavLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default NavLayout;
