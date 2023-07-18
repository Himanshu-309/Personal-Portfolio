import { Container, Row, Col } from "react-bootstrap";
import logo111 from '../assets/img/logo111.png';
import {SiLeetcode} from 'react-icons/si'
import {  VscGithub} from "react-icons/vsc";
import {GrLinkedinOption} from "react-icons/gr"
import React from "react";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo111} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon-f">
            <a href="https://linkedin.com/in/himanshu-upadhyay-17a756205"><GrLinkedinOption size={20} color="white"/></a>
                <a href="https://github.com/Himanshu-309" className="github"><VscGithub size={20} color="white" /></a>
                <a href="https://leetcode.com/himanshu_309/"><SiLeetcode size={20} color="white"/></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}