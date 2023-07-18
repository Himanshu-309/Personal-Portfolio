import { Col, Row } from "react-bootstrap";
import React from "react";
export const LinkCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-link-imgbx">
        <img src={imgUrl} />
        <div className="proj-link-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}