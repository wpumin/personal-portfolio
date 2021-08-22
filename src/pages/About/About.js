import React, { useState } from "react";
import Layout from "../../components/Layout";

const About = ({ data }) => {
  var moment = require("moment");
  var splitedName = data.basics.name.split(" ");
  const [name, setName] = useState(splitedName[0]);
  const [surname, setSurname] = useState(splitedName[1]);
  return (
    <Layout data={data}>
      <div className="about fade-in">
        <section className="title-section text-left text-sm-center revealator-once revealator-delay1">
          <h1>
            ABOUT <span>ME</span>
          </h1>
          <span className="title-bg">Resume</span>
        </section>
        <section className="main-content revealator-once revealator-delay1">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5 col-xl-6">
                <div className="row">
                  <div className="col-12">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                      personal infos
                    </h3>
                  </div>
                  <div className="col-12 d-block d-sm-none mt-3 mb-3">
                    <img
                      src={data.basics.image}
                      className="img-fluid main-img-mobile"
                      alt="my picture"
                    />
                  </div>
                  <div className="col-6">
                    <ul className="about-list list-unstyled open-sans-font">
                      <li>
                        <span className="title">first name: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          {name}
                        </span>
                      </li>
                      <li>
                        <span className="title">last name: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          {surname}
                        </span>
                      </li>
                      <li>
                        <span className="title">Age: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          23 Years
                        </span>
                      </li>
                      <li>
                        <span className="title">Nationality: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          Thailand
                        </span>
                      </li>
                      <li>
                        <span className="title">Freelance: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          Available
                        </span>
                      </li>
                      <li>
                        <span className="title">Website: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          {data.basics.url}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="about-list list-unstyled open-sans-font">
                      <li>
                        <span className="title">Address: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          51 Thoet Thai 15 Alley, Thoet Thai Rd, Bang Yi Ruea,
                          Thonburi 10600, Bangkok, Thailand
                        </span>
                      </li>
                      <li>
                        <span className="title">Phone: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          +66898115155
                        </span>
                      </li>
                      <li>
                        <span className="title">Email: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          pumin.wongsiri@gmail.com
                        </span>
                      </li>
                      <li>
                        <span className="title">Langages: </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          Thai, English
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 mt-3">
                    <a
                      className="button"
                      href="https://gitconnected.com/wpumin/resume"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <span className="button-text">Download CV</span>
                      <span className="button-icon fa fa-download" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                <div className="row">
                  <div className="col-6">
                    <div className="box-stats with-margin">
                      <h3 className="poppins-font position-relative">
                        {data.basics.yearsOfExperience
                          ? data.basics.yearsOfExperience
                          : 9}
                      </h3>
                      <p className="open-sans-font m-0 position-relative text-uppercase">
                        Months of <span className="d-block">experience</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="box-stats with-margin">
                      <h3 className="poppins-font position-relative">
                        {data.projects.length}
                      </h3>
                      <p className="open-sans-font m-0 position-relative text-uppercase">
                        Completed <span className="d-block">projects</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="box-stats">
                      <h3 className="poppins-font position-relative">10</h3>
                      <p className="open-sans-font m-0 position-relative text-uppercase">
                        Happy<span className="d-block">customers</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="box-stats">
                      <h3 className="poppins-font position-relative">3</h3>
                      <p className="open-sans-font m-0 position-relative text-uppercase">
                        Awards <span className="d-block">certificate</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="separator" />
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                  My Skills
                </h3>
              </div>

              {data.skills.map((item, index) => (
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                  {item.rating == 1 && (
                    <>
                      <div class="c100 p20">
                        <span>20%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                      <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                        {item.name}
                      </h6>
                    </>
                  )}
                  {item.rating == 2 && (
                    <>
                      <div class="c100 p40">
                        <span>40%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                      <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                        {item.name}
                      </h6>
                    </>
                  )}
                  {item.rating == 3 && (
                    <>
                      <div class="c100 p60">
                        <span>60%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                      <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                        {item.name}
                      </h6>
                    </>
                  )}
                  {item.rating == 4 && (
                    <>
                      <div class="c100 p80">
                        <span>80%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                      <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                        {item.name}
                      </h6>
                    </>
                  )}
                  {item.rating == 5 && (
                    <>
                      <div class="c100 p100">
                        <span>100%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                      <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                        {item.name}
                      </h6>
                    </>
                  )}
                </div>
              ))}
            </div>
            <hr className="separator mt-1" />
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                  Experience <span>&amp;</span> Education
                </h3>
              </div>
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <ul>
                    {data.work.map((item, index) => (
                      <li>
                        <div className="icon">
                          <i className="fa fa-briefcase" />
                        </div>
                        <span className="time open-sans-font text-uppercase">
                          {moment(item.startDate).format("YYYY MMMM")}
                          {" - "}
                          {item.endDate
                            ? moment(item.endDate).format("YYYY MMMM")
                            : "Present"}
                        </span>
                        <h5 className="poppins-font text-uppercase">
                          {item.position}
                          <a
                            href={item.url}
                            rel="noreferrer noopener"
                            target="_blank"
                            className="light-link poppins-font text-uppercase text-white"
                          >
                            <span className="place open-sans-font">
                              {item.name}
                            </span>
                          </a>
                        </h5>
                        <p className="open-sans-font">{item.summary}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <ul>
                    {data.education.map((item, index) => (
                      <li>
                        <div className="icon">
                          <i className="fa fa-graduation-cap" />
                        </div>
                        <span className="time open-sans-font text-uppercase">
                          {moment(item.startDate).format("YYYY MMMM")}
                          {" - "}
                          {item.endDate
                            ? moment(item.endDate).format("YYYY MMMM")
                            : "Present"}
                        </span>
                        <h5 className="light-link">
                          <a
                            href={item.url}
                            rel="noreferrer noopener"
                            target="_blank"
                            className="light-link poppins-font text-uppercase text-white"
                          >
                            {item.institution}
                          </a>
                        </h5>
                        <p className="open-sans-font">
                          - Department: {item.area ? item.area : "-"} <br />-
                          Field: {item.studyType ? item.studyType : "-"}
                          <br /> - GPAX: {item.gpa}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
