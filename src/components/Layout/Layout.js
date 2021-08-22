import React, { Children } from "react";
import Header from "../Header";

const Layout = ({ data, children }) => {
  return (
    <>
      <Header data={data} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
