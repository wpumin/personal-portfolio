import emailjs from "emailjs-com";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const Contact = ({ data }) => {
  const [sendEmailStatus, setSendEmailStatus] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [borderDanger, setBorderDanger] = useState();
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    checkStatusDisableSubmit();
  }, [name, email, subject, message]);

  function checkStatusDisableSubmit() {
    if (
      name != "" &&
      email != "" &&
      validateEmail(email) == true &&
      subject != "" &&
      message != ""
    ) {
      setDisableSubmit(false);
      setBorderDanger(false);
    } else {
      if (validateEmail(email) == false && email != "") {
        setBorderDanger(true);
        setDisableSubmit(true);
      }
      setDisableSubmit(true);
    }
  }

  function validateEmail(email) {
    const regExEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExEmail.test(email);
  }

  function sendEmail(e) {
    setDisableSubmit(true);
    setSendEmailStatus("Sending...");

    e.preventDefault();

    emailjs
      .sendForm(
        "pumin.wongsiri@gmail.com",
        "template_4lc33v2",
        e.target,
        "user_FS8KskyXkkHMxdih7KTRR"
      )
      .then(
        (result) => {
          setSendEmailStatus("Message Sent!");
          setTimeout(() => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setSendEmailStatus("");
          }, 2000);
        },
        (error) => {
          setSendEmailStatus("Error Sending!");
          //   console.log(error.text);
        }
      );
  }

  return (
    <Layout data={data}>
      <div className="contact fade-in">
        <div>
          {/* Page Title Starts */}
          <section className="title-section text-left text-sm-center revealator-once revealator-delay1">
            <h1>
              get in <span>touch</span>
            </h1>
            <span className="title-bg">contact</span>
          </section>
          {/* Page Title Ends */}
          {/* Main Content Starts */}
          <section className="main-content revealator-once revealator-delay1">
            <div className="container">
              <div className="row">
                {/* Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Don't be shy !
                  </h3>
                  <p className="open-sans-font mb-3">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <p className="open-sans-font custom-span-contact position-relative">
                    <i className="fa fa-envelope-open position-absolute" />
                    <span className="d-block">mail me</span>
                    <a
                      href="mailto:pumin.wongsiri@gmail.com"
                      rel="noreferrer noopener"
                      className=" text-white light-link poppins-font"
                    >
                      pumin.wongsiri@mail.com
                    </a>
                  </p>
                  <p className="open-sans-font custom-span-contact position-relative">
                    <i className="fa fa-phone-square position-absolute" />
                    <span className="d-block">call me</span>
                    <a
                      href="tel:0898115155"
                      className=" text-white light-link poppins-font"
                    >
                      +66898115155
                    </a>
                  </p>
                  <ul className="social list-unstyled pt-1 mb-5">
                    <li className="facebook">
                      <a title="Facebook" href="/">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    {/* <li className="twitter">
                      <a title="Twitter" href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="youtube">
                      <a title="Youtube" href="/">
                        <i className="fa fa-youtube" />
                      </a>
                    </li> */}
                    <li className="dribbble">
                      <a title="Dribbble" href="/">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li className="dribbble">
                      <a
                        title="GitHub"
                        href="https://github.com/wpumin"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <i className="fa fa-github" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Left Side Ends */}
                {/* Contact Form Starts */}
                <div className="col-12 col-lg-8">
                  <form className="contactform" onSubmit={sendEmail}>
                    <div className="contactform">
                      <div className="row mb-4">
                        <div className="col-12 col-md-4">
                          <input
                            type="text"
                            name="name"
                            placeholder="YOUR NAME"
                            defaultValue={name}
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-4">
                          <input
                            className={`${borderDanger && "danger"}`}
                            type="email"
                            name="email"
                            placeholder="YOUR EMAIL"
                            defaultValue={email}
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-4">
                          <input
                            type="text"
                            name="subject"
                            placeholder="YOUR SUBJECT"
                            defaultValue={subject}
                            value={subject}
                            onChange={(e) => {
                              setSubject(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="message"
                            placeholder="YOUR MESSAGE"
                            defaultValue={message}
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                          />
                          <button
                            type="submit"
                            className={`button ${
                              disableSubmit ? "disabled" : ""
                            }`}
                            disabled={disableSubmit}
                          >
                            <span className="button-text">Send Message</span>
                            <span
                              className={`button-icon fa fa-send ${
                                disableSubmit ? "disabled" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {sendEmailStatus != "" && (
                          <div className="col-12 form-message mt-4 pt-2">
                            <span
                              className={`output_message text-center font-weight-600 text-uppercase ${
                                sendEmailStatus == "Message Sent!" && "success"
                              } ${
                                sendEmailStatus == "Error Sending!" && "error"
                              } `}
                            >
                              {sendEmailStatus}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                {/* Contact Form Ends */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
