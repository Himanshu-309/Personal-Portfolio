// import { Col } from "react-bootstrap";
// import React, { useState } from "react";
// import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
// // import Tilt from 'react-parallax-tilt';
// // import { ParallaxTilt } from "react-parallax-tilt";
// import { Tilt } from "react-tilt";
// import { fadeIn, textVariant } from "../utils/motion";
// import { styles } from "../style.js";
// import github from "../assets/img/github.png";
// export const ProjectCard = ({
//   index,
//   title,
//   description,
//   imgUrl,
//   code_link,
// }) => {
//   return (
//     // <Col size={12} sm={6} md={4}>
//     //   <div className="proj-imgbx">
//     //     <img src={imgUrl} alt="img" />
//     //     <div className="proj-txtx">
//     //       <h4>{title}</h4>
//     //       <p>{description}</p>
//     //     </div>
//     //   </div>
//     // </Col>
//     <Col  size={12} sm={6} md={4}>
//     <motion.div  variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         tiltMaxAngleX={45}
//         tiltMaxAngleY={45}
//         scale={1}
//         transitionSpeed={450}
//         className="bg-primary-subtle p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={imgUrl}
//             alt="project_image"
//             className="w-full h-full object-cover rounded-2xl"
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="source code"
//                 style={{ width: "50%", height: "50%", objectFit: "contain" }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{title}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div> */}
//       </Tilt>
//     </motion.div>
//     </Col>
//   );
// };



import React from "react";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import Tilt from "react-parallax-tilt";
import { Col } from "react-bootstrap";
import github from "../assets/img/github (1).png";
import website from "../assets/img/website.png";
import "./projectCard.css";
import { fadeIn, textVariant } from "../utils/motion";
export const ProjectCard = ({  imgUrl, github_link,live_link, title, description, index }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          scale={1}
          transitionSpeed={450}
          className="bg-primary-subtle p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative main-card">
            <div className="card-img-container">
              <img
                src={imgUrl}
                alt="project_image"
                className="card-img"
              />

              <div className="card-img-overlay">
                <div
                  onClick={() => window.open(github_link, "_blank")}
                  className="black-gradient rounded-full cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="github-icon"
                  />
                </div>
              </div>

              <div className="card-img-overlay-live">
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className="black-gradient rounded-full cursor-pointer"
                >
                  <img
                    src={website}
                    alt="source code"
                    className="live-icon"
                  />
                </div>
              </div>

            </div>

            <div className="card-content">
              <h3 className="card-title">{title}</h3>
              <span className="card-description">{description}</span>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </Col>
  );
};


