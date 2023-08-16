import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { useNavigate,BrowserRouter} from "react-router-dom";
import logo111 from '../assets/img/logo111.png';
import React  from 'react';
import {SiLeetcode} from 'react-icons/si'
import {  VscGithub} from "react-icons/vsc";
import {GrLinkedinOption} from "react-icons/gr"
import { Router } from "react-bootstrap-icons";

//import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

export const NavBar = () => {
  // const navigate  = useNavigate();
  // const navigateToAboutMe=()=>{
  //   navigate('/aboutme');
  // };

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Himanshu Upadhyay.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Himanshu Upadhyay Resume.pdf';
            alink.click();
        })
    })
}

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo111} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Accomplishment</Nav.Link>
              
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://linkedin.com/in/himanshu-upadhyay-17a756205"><GrLinkedinOption size={20} color="white"/></a>
                <a href="https://github.com/Himanshu-309" className="github"><VscGithub size={20} color="white" /></a>
                <a href="https://leetcode.com/himanshu_309/"><SiLeetcode size={20} color="white"/></a>
              </div>
              {/* //<HashLink to='#connect'> */}
                <button className="vvd" onClick={onButtonClick}><span>Get Resume</span></button>
                
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
    
      </Navbar>
      
    // </Router>
  )
}