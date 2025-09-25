import React from "react";
import myImage from "../img/portfolio.jpg";
import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaMapMarkerAlt,
  FaFileDownload,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "java",
          content: "Java",
          icon: <RiJavaLine />,
        },
        {
          id: "javascript",
          content: "JavaScript",
          icon: <FaJs />,
        },
        {
          id: "python",
          content: "Python",
          icon: <FaPython />,
        },
        {
          id: "c++",
          content: "C++",
          icon: <TbBrandCpp />,
        },
        {
          id: "html",
          content: "HTML",
          icon: <FaHtml5 />,
        },
        {
          id: "css",
          content: "CSS",
          icon: <FaCss3 />,
        },
        {
          id: "react",
          content: "React.js",
          icon: <FaReact />,
        },
        {
          id: "node",
          content: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          id: "express",
          content: "Express.js",
          icon: <SiExpress />,
        },
        {
          id: "mongodb",
          content: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          id: "mysql",
          content: "MySQL",
          icon: <GrMysql />,
        },
        {
          id: "docker",
          content: "Docker",
          icon: <FaDocker />,
        },
        { id: "aws", content: "AWS", icon: <FaAws /> },
      ],
      about_me: [
        {
          id: "about-paragrah",
          content:
            "Hello! I'm a Computer Science and Economics double major at Vanderbilt University with a passion for full-stack development and exploring the vast potential of cloud computing. While my current focus involves developing full-stack research applications, I'm also intrigued by learning how technological innovation and economic principles intersect and influence each other. I'm eager to apply my interdisciplinary knowledge to create innovative solutions and continue growing my expertise.",
        },
        {
          id: "location",
          content: (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#FF6347",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <FaMapMarkerAlt
                style={{
                  fontSize: "20px",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              Nashville, TN
            </div>
          ),
        },
        {
          id: "resume-link",
          content: (
            <div>
              <a
                href="https://drive.google.com/file/d/1u17Blvuyqj0Z91tNUp-AMs-wvd_jWnbk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: "#0078ff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background-color 0.3s, transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#0056b3")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#0078ff")
                }
              >
                <FaFileDownload
                  style={{
                    marginRight: "8px",
                    fontSize: "18px",
                  }}
                />
                Resume
              </a>
            </div>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="title-box-2">
                  <h5 className="title-left">About Me</h5>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="about-img" style={{ textAlign: "center" }}>
                      <img
                        className="img-fluid rounded b-shadow-a"
                        src={myImage}
                        alt="Profile"
                      />
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="about-me">
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}

                      <div className="socials" style={{ paddingTop: "0" }}>
                        <ul>
                          <li>
                            <a
                              href="https://www.instagram.com/hua.jin_"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span
                                className="ico-circle"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FaInstagram />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/HuaJin16"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span
                                className="ico-circle"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FaGithub />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/huajin16/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span
                                className="ico-circle"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FaLinkedin />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <p className="title-s">Tech Stack</p>
                    <div
                      className="skill-mf"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          gap: "20px",
                          justifyContent: "flex-start",
                        }}
                      >
                        {this.state.skills.map((skill) => (
                          <div
                            key={skill.id}
                            style={{
                              textAlign: "center",
                              padding: "15px",
                              borderRadius: "8px",
                              backgroundColor: "#f8f9fa",
                              minWidth: "120px",
                              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "24px",
                                color: "#0078ff",
                                marginBottom: "8px",
                                display: "block",
                              }}
                            >
                              {skill.icon}
                            </span>
                            <p
                              style={{
                                margin: "0",
                                fontWeight: "500",
                                fontSize: "14px",
                              }}
                            >
                              {skill.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
