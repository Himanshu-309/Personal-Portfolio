// Accomplishment section

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { CertificateCard } from "./CertificateCard";
import { LinkCard } from "./LinkCard";

import projImg1 from "../assets/img/sp.jpeg";
import projImg2 from "../assets/img/sp.jpeg";
import projImg3 from "../assets/img/mb.jpeg";

import leetcode from "../assets/img/leetcode1.png";
import codechef from "../assets/img/codechef.png";
import github from "../assets/img/GitHub1.png";
import linkedin from "../assets/img/icons8-linked-in-200.png";
import codingnanjas from "../assets/img/codingninjas.png";
import gfg from "../assets/img/gfg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

import aws from "../assets/img/certificates/aws.jpg";
import basiccpp from "../assets/img/certificates/basiccpp.jpeg";
import pointer from "../assets/img/certificates/pointer.jpeg";
import azure from "../assets/img/certificates/azure.jpeg";
import digital from "../assets/img/certificates/digital.jpeg";
import quoncode from "../assets/img/certificates/quoncode.jpeg";
import library from "../assets/img/certificates/library.jpeg";
import technical from "../assets/img/certificates/technical.jpeg";
import kahoot from "../assets/img/certificates/kahoot.jpeg";

export const Projects = () => {
   
  const projects = [
    {
      title: "Student Portfolio",
      description: "The student portfilio application developed with Python and tkinter offers a convenient solution for organizing and accessing comprehensive student information in universities or colleges. It provides a centralized platform to view and manage all student records efficiently. ",
      imgUrl: projImg1,
      github_link: "https://github.com/Himanshu-309/Student_portfolio.git",
      live_link: "https://google.com"
    },
    {
      title: "FlexTrainer",
      description: "FlexTrainer is a React-based fitness app that showcases exercises for every body part and muscle group, offering a seamless switch between light and dark mode. It leverages the power of RapidAPI to provide comprehensive exercise data.",
      imgUrl: projImg2,
      github_link: "https://github.com",
      live_link: "https://google.com"
    },
    {
      title: "Medi Block",
      description: "MediBlock is a decentralized blockchain system that securely stores and presents patients' data. Developed using React.js, JavaScript, and Solidity, it ensures the privacy and integrity of medical records while enabling seamless access and sharing among healthcare providers.",
      imgUrl: projImg3,
      github_link: "https://github.com/AdityaWaskar/MEDI-BLOCK.git",
      live_link: "https://drive.google.com/file/d/14dNFqQjNukQWxwGOt78uz1-BAHQUOu6c/view?usp=sharing"
    },
  ];
 
  const certificates = [
    {
      title: "AWS Academy Graduate - Aws Academy Cloud Foundation",
      description: <a href="https://drive.google.com/file/d/1C_Tn1U8PBEcZ5HHg7f9d3q71GvR1t11Y/view?usp=sharing">Click Me</a>,
      imgUrl: aws,
    },
    {
      title: "CodeStdio - Basic of C++",
      description: <a href="https://drive.google.com/file/d/15zKqe77EzX0NyVeknq-r2wXJfH0USkJp/view?usp=sharing">Click Me</a>,
      imgUrl: basiccpp,
    },
    {
      title: "CodeStdio - Pointer",
      description: <a href="https://drive.google.com/file/d/1cxOMsgzSIMbRz2FpgCKpqiBxgaoV8fqB/view?usp=share_link">Click Me</a>,
      imgUrl: pointer,
    },
    {
      title: " Microsoft Azure Data Fundaments",
      description: <a href="https://drive.google.com/file/d/1uebBP22b8ISeG7idrYR-dH9n1ZA3sKVP/view?usp=sharing">Click Me</a>,
      imgUrl: azure,
    },
    {
      title: "Entrepreneurship & Digital Marketing - By Slrtce",
      description: <a href="https://drive.google.com/file/d/1-8UChFBkNvmUeIyLcAtG_7TGr65nfS-q/view?usp=sharing">Click Me</a>,
      imgUrl: digital,  
    },
    {
      title: "Quoncode - By Slrtce",
      description: <a href="https://drive.google.com/file/d/15ThIe1YU-1CQTId1gAa_B8zOGWtyWnF-/view?usp=sharing">Click Me</a>,
      imgUrl: quoncode,
    },
    {
      title: "Vivekanand Education Society’s Institute of Technology LIBRARY",
      description: <a href="https://drive.google.com/file/d/1Xkb7MDf7An6Gimofhel0yfF9f5ts3i9h/view?usp=sharing">Click Me</a>,
      imgUrl: library,
    },
    {
      title: "Coordinating a Technical Events in Carnival Aqua 2022",
      description: <a href="https://drive.google.com/file/d/1g3gD29FXM_Xsb2GkzvU03tvefRE4cRCg/view?usp=sharing">Click Me</a>,
      imgUrl: technical,
    },
    {
      title: "Kahoot Quiz - By Slrtce",
      description: <a href="https://drive.google.com/file/d/15d_2FhFQ7OQHc46PwvweTbNvrcdqM1EN/view?usp=sharing">Click Me</a>,
      imgUrl: kahoot,
    },
  ];

  const links=[
    {
      title:"Leetcode ",
      description: <a href="https://leetcode.com/himanshu_309/">View Profile</a>,
      imgUrl:leetcode,
    },
    {
      title:"CodeChef",
      description: <a href="https://www.codechef.com/users/himanshu_309">View Profile</a>,
      imgUrl:codechef,
    },
    {
      title:"Codestdio",
      description: <a href="https://www.codingninjas.com/codestudio/profile/e43592cc-379e-46d2-b655-2d87cbd10e43">View Profile</a>,
      imgUrl:codingnanjas,
    },
    {
      title:"GFG",
      description: <a href="https://auth.geeksforgeeks.org/user/himanshu662187/practice">View Profile</a>,
      imgUrl:gfg,
    },
    {
      title:"Git Hub",
      description: <a href="https://github.com/Himanshu-309">View Profile</a>,
      imgUrl:github,
    },
    {
      title:"Linked In",
      description: <a href="https://linkedin.com/in/himanshu-upadhyay-17a756205">View Profile</a>,
      imgUrl:linkedin,
    },

  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
           <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Accomplishment</h2>
                <p> These accomplishments and profile links showcase my dedication to honing my technical skills, staying updated with industry trends, and actively contributing to the development community. I am passionate about leveraging technology to solve complex problems and look forward to applying my knowledge and experiences in future endeavors.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="linkspage" eventKey="third">Links</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          certificates.map((project, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                index={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          links.map((project, index) => {
                            return (
                              <LinkCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}