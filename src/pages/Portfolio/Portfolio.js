import React, { useState } from "react";
import Layout from "../../components/Layout";
import { SRLWrapper } from "simple-react-lightbox-pro";

const Portfolio = ({ data }) => {
  var moment = require("moment");

  const options = {
    settings: {
      boxShadow: "none",
      disableKeyboardControls: false,
      disablePanzoom: false,
      disableWheelControls: false,
      hideControlsAfter: false,
      lightboxTransitionSpeed: 0.3,
      lightboxTransitionTimingFunction: "linear",
      overlayColor: "rgba(30, 30, 30, 0.9)",
      slideAnimationType: "fade",
      slideSpringValues: [300, 50],
      slideTransitionSpeed: 0.6,
      slideTransitionTimingFunction: "linear",
      usingPreact: false,
    },
  };

  return (
    <Layout data={data}>
      <div className="portfolio fade-in">
        <section className="title-section text-left text-sm-center revealator-once revealator-delay1">
          <h1>
            my <span>portfolio</span>
          </h1>
          <span className="title-bg">works</span>
        </section>
        {/* Page Title Ends */}
        {/* Main Content Starts */}
        <section className="main-content revealator-once revealator-delay1">
          <SRLWrapper options={options}>
            <div className="container">
              <div id="gallery-with-links" className="content mt-4">
                <div className="row">
                  {data.projects.map((item, index) => (
                    <div className="col-xl-4 col-md-6 col-12 col-image-with-link">
                      <a
                        href={item.images[0].resolutions.desktop.url}
                        className="element_with_overlay"
                      >
                        <div className="overlay column" srl_overlay="true">
                          <div>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                          </div>
                          <span className="mt-4 small">
                            url:{" "}
                            {item.website
                              ? item.website
                              : item.githubUrl
                              ? item.githubUrl
                              : "-"}
                          </span>
                        </div>
                        <img
                          src={item.images[0].resolutions.mobile.url}
                          alt={item.name}
                          srl_elementid={index}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SRLWrapper>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;
