import React from "react";

import SOL1 from "../img/SOL1.png";
import SOL2 from "../img/SOL2.png";
import SOL3 from "../img/SOL3.png";
import SOL4 from "../img/SOL4.png";
import SOL5 from "../img/SOL5.png";
import SOL6 from "../img/SOL6.png";
import UI1 from "../img/UI1.png";
import UI2 from "../img/UI2.png";
import UI3 from "../img/UI3.png";
import VUSPI1 from "../img/VUSPI Logo.png";
import REUSE1 from "../img/Reuse1.png";
import REUSE2 from "../img/Reuse2.png";
import REUSE3 from "../img/Reuse3.png";
import REUSE4 from "../img/Reuse4.png";
import REUSE5 from "../img/Reuse5.png";
import REUSE6 from "../img/Reuse6.png";
import REUSE7 from "../img/Reuse7.png";
import REUSE8 from "../img/Reuse8.png";
import REUSE9 from "../img/Reuse9.png";
import "./portfolio.css";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                className="title-box text-center"
                style={{ marginBottom: "32px" }}
              >
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  A combination of my projects and research studies:
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            {/* Reuse Project */}
            <div className="col-md-4" style={{ padding: "15px" }}>
              <div
                className="work-box"
                style={{ display: "block", height: "100%" }}
              >
                <a
                  href={REUSE1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "block", height: "100%" }}
                >
                  <div
                    className="work-img"
                    style={{
                      borderBottom: "1px solid black",
                      height: "70%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={REUSE1}
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div
                    className="work-content"
                    style={{ paddingTop: "16px", paddingBottom: "8px" }}
                  >
                    <div className="row mb-2">
                      <div className="col-12">
                        <h2 className="w-title">Reuse, Vandy!</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-9">
                        <div className="w-more">
                          <span className="w-ctegory">
                            Tech Stack: MERN (MongoDB, Express.js, React.js,
                            Node.js), Firebase, HTML/CSS, JavaScript, Socket.io,
                            Nodemailer
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* Hidden gallery images */}
                {[
                  REUSE2,
                  REUSE3,
                  REUSE4,
                  REUSE5,
                  REUSE6,
                  REUSE7,
                  REUSE8,
                  REUSE9,
                ].map((img, index) => (
                  <a
                    key={index}
                    href={img}
                    data-lightbox="gallery-aguadeluz"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                ))}
              </div>
            </div>

            {/* Virtual Laboratory Project */}
            <div className="col-md-4" style={{ padding: "15px" }}>
              <div
                className="work-box"
                style={{ display: "block", height: "100%" }}
              >
                <a
                  href={SOL1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "block", height: "100%" }}
                >
                  <div
                    className="work-img"
                    style={{
                      borderBottom: "1px solid black",
                      height: "70%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={SOL1}
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div
                    className="work-content"
                    style={{ paddingTop: "16px", paddingBottom: "8px" }}
                  >
                    <div className="row mb-2">
                      <div className="col-12">
                        <h2 className="w-title">
                          Developing a Virtual Laboratory to Investigate
                          Human-System Trust
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-9">
                        <div className="w-more">
                          <span className="w-ctegory">
                            Research Poster, Report, and Web Application
                            Description/Images
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* Hidden gallery images */}
                {[SOL2, SOL3, SOL4, SOL5, SOL6].map((img, index) => (
                  <a
                    key={index}
                    href={img}
                    data-lightbox="gallery-aguadeluz"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                ))}
              </div>
            </div>

            {/* LLMs in CS Education Project */}
            <div className="col-md-4" style={{ padding: "15px" }}>
              <div
                className="work-box"
                style={{ display: "block", height: "100%" }}
              >
                <a
                  href={UI1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "block", height: "100%" }}
                >
                  <div
                    className="work-img"
                    style={{
                      borderBottom: "1px solid black",
                      height: "70%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={UI1}
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div
                    className="work-content"
                    style={{ paddingTop: "16px", paddingBottom: "8px" }}
                  >
                    <div className="row mb-2">
                      <div className="col-12">
                        <h2 className="w-title">
                          Integrating LLMs into CS Education
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-9">
                        <div className="w-more">
                          <span className="w-ctegory">
                            Vanderbilt's Teaching, Learning & Diversity,
                            Computer Science, and the Information Systems
                            Department at Haifa University
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* Hidden gallery images */}
                {[UI2, UI3].map((img, index) => (
                  <a
                    key={index}
                    href={img}
                    data-lightbox="gallery-aguadeluz"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                ))}
              </div>
            </div>

            {/* VUSPI Project */}
            <div className="col-md-4" style={{ padding: "15px" }}>
              <div
                className="work-box"
                style={{ display: "block", height: "100%" }}
              >
                <a
                  href={VUSPI1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "block", height: "100%" }}
                >
                  <div
                    className="work-img"
                    style={{
                      borderBottom: "1px solid black",
                      height: "70%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={VUSPI1}
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className="work-content"
                    style={{ paddingTop: "16px", paddingBottom: "8px" }}
                  >
                    <div className="row mb-2">
                      <div className="col-12">
                        <h2 className="w-title">VUSPI</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-9">
                        <div className="w-more">
                          <span className="w-ctegory">
                            Constructing a Student Price Index from student
                            expenditure baskets of Vanderbilt Students
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
