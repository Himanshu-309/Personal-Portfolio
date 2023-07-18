// import React from "react";
// import { Container, Col, Row } from "react-bootstrap";
// // import Carousel from "react-multi-carousel";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import "react-multi-carousel/lib/styles.css";
// import meter1 from "../assets/img/meter1.png";
// import meter2 from "../assets/img/meter2.png";
// import meter3 from "../assets/img/meter3.png";
// import colorSharp from "../assets/img/color-sharp.png";
// import { useState, useEffect } from "react";

// import cpp from "../assets/img/skills/c++.png"
// import html from "../assets/img/skills/html.png"
// import css from "../assets/img/skills/css.png"
// import js from "../assets/img/skills/javascript.png"
// import react from "../assets/img/skills/reactjs.png"
// import java from "../assets/img/skills/java.png"
// import git from "../assets/img/skills/git.png"
// import ps from "../assets/img/skills/problem-solving.png"
// import communication from "../assets/img/skills/communication.png"

// export const Skills = () => {
//   //This is for responsive as the device changes
//   // const responsive = {
//   //   superLargeDesktop: {
//   //     // the naming can be any, depends on you.
//   //     breakpoint: { max: 4000, min: 3000 },
//   //     items: 5,
//   //   },
//   //   desktop: {
//   //     breakpoint: { max: 3000, min: 1024 },
//   //     items: 3,
//   //   },
//   //   tablet: {
//   //     breakpoint: { max: 1024, min: 464 },
//   //     items: 2,
//   //   },
//   //   mobile: {
//   //     breakpoint: { max: 464, min: 0 },
//   //     items: 1,
//   //   },
//   // };

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       partialVisibilityGutter: 30,
//     },
//   };

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalSlides = 9; // Change this value to the total number of slides in your carousel

//   useEffect(() => {
//     const timer = setInterval(() => {
//       // Increment the current index to rotate to the next slide
//       setCurrentIndex((currentIndex + 1) % totalSlides);
//     }, 3000); // Adjust the interval (in milliseconds) as needed

//     return () => clearInterval(timer); // Clean up the timer on component unmount
//   }, [currentIndex, totalSlides]);

//   return (
//     <section className="skill" id="skill">
//       <Container>
//         <Row>
//           <Col>
//             <div className="skill-bx">
//               <h2>Skills</h2>
//               <p>
//                 Proficient in coding with Strong communication and
//                 problem-solving skills, ensuring effective collaboration and
//                 innovative solutions. Meticulous attention to detail for
//                 high-quality results. Committed to continuous learning and
//                 staying up-to-date with industry trends.
//                 <Carousel
//                 //  responsive={responsive}
//                   showArrows={true}
//                   showStatus={false}
//                   showIndicators={false}
//                   showThumbs={false}
//                   infiniteLoop={true}
//                   selectedItem={currentIndex}
//                   onChange={setCurrentIndex}
//                   className="skill-slider"
//                   centerMode={true}
//                   centerSlidePercentage={33.33}
//                   itemClass="carousel-item"
//                    infinite={true}
//                    responsive={{
//                     superLargeDesktop: {
//                       breakpoint: { max: 4000, min: 3000 },
//                       items: 5,
//                     },
//                     desktop: {
//                       breakpoint: { max: 3000, min: 1024 },
//                       items: 3,
//                     },
//                     tablet: {
//                       breakpoint: { max: 1024, min: 464 },
//                       items: 2,
//                     },
//                     mobile: {
//                       breakpoint: { max: 464, min: 0 },
//                       items: 1,
//                     },
//                   }}
//                 >
//                   <div className="item">
//                     <img src={cpp} alt="img" />
//                     <h5>C++</h5>
//                   </div>
//                   <div className="item">
//                     <img src={html} alt="img" />
//                     <h5>HTML</h5>
//                   </div>
//                   <div className="item">
//                     <img src={css} alt="img" />
//                     <h5>CSS</h5>
//                   </div>
//                   <div className="item">
//                     <img src={js} alt="img" />
//                     <h5>JavaScript</h5>
//                   </div>
//                   <div className="item">
//                     <img src={react} alt="img" />
//                     <h5>React js</h5>
//                   </div>
//                   <div className="item">
//                     <img src={java} alt="img" />
//                     <h5>Java</h5>
//                   </div>
//                   <div className="item">
//                     <img src={git} alt="img" />
//                     <h5>Git</h5>
//                   </div>
//                   <div className="item">
//                     <img src={communication} alt="img" />
//                     <h5>Communication</h5>
//                   </div>
//                   <div className="item">
//                     <img src={ps} alt="img" />
//                     <h5>Problem Solving</h5>
//                   </div>
//                 </Carousel>
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-left" src={colorSharp} />
//     </section>
//   );
// };

import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import colorSharp from "../assets/img/color-sharp.png";
import { useState, useEffect } from "react";

// Import your skill images here
import cpp from "../assets/img/skills/c++.png";
import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import js from "../assets/img/skills/javascript.png";
import react from "../assets/img/skills/reactjs.png";
import java from "../assets/img/skills/java.png";
import git from "../assets/img/skills/git.png";
import ps from "../assets/img/skills/problem-solving.png";
import communication from "../assets/img/skills/communication.png";

export const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 9;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, totalSlides]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3, // Number of items to show on larger screens
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    autoplay: true, // Enable auto rotation
    autoplaySpeed: 2000, // Set the interval between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Number of items to show on tablets
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1, // Number of items to show on mobile devices
        },
      },
    ],
  };

  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Proficient in coding with strong communication and
                problem-solving skills, ensuring effective collaboration and
                innovative solutions. Meticulous attention to detail for
                high-quality results. Committed to continuous learning and
                staying up-to-date with industry trends.
              </p>
              <Slider {...settings}>
                <div className="item">
                  <img src={cpp} alt="img" className="custom-image-size" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={html} alt="img" className="custom-image-size" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="img" className="custom-image-size" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="img" className="custom-image-size" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="img" className="custom-image-size" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={java} alt="img" className="custom-image-size" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={git} alt="img" className="custom-image-size" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img
                    src={communication}
                    alt="img"
                    className="custom-image-size"
                  />
                  <h5>Communication</h5>
                </div>
                <div className="item">
                  <img src={ps} alt="img" className="custom-image-size" />
                  <h5>Problem Solving</h5>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
