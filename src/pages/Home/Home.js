import React from "react";
import Layout from "../../components/Layout";
import { Link, useLocation } from "react-router-dom";
import profile from "./pumin.webp";

const Home = ({ data }) => {
  return (
    <Layout data={data}>
      <div className="home fade-in">
        <section className="container-fluid main-container container-home p-0 revealator-once revealator-delay1">
          <div className="color-block d-none d-lg-block" />
          <div className="row home-details-container align-items-center">
            <div className="col-lg-4 bg position-fixed d-none d-lg-block" />
            <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left mt-5 mt-xl-0">
              <div className="mt-5">
                <img
                  src={profile}
                  className="img-fluid main-img-mobile d-none d-sm-block d-lg-none"
                  alt="my picture"
                />
                <div className="ml-4 mr-4 mt-5 mt-lg-0">
                  <h1 className="text-uppercase poppins-font">
                    I'm {data.basics.name}.<span>{data.basics.label}</span>
                  </h1>
                  <p className="open-sans-font">{data.basics.summary}</p>
                  <Link className="button mt-3 mb-5" to="/about">
                    <span className="button-text">more about me</span>
                    <span className="button-icon fa fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
