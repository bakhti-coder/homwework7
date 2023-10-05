import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Fragment>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </Fragment>
  );
};

export default Layout;
