// import {useState, useEffect} from react;
import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Banner =()=>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(0);
    const toRotate =["Programming Enthusiastic", "Competitive Programmer", "Web Developer"];
    const [text, setText] =useState('');
    const [delta,setDelta]= useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
             tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i= loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
    
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm Himanshu Upadhyay `} </h1>
                        <h2><span className="wrap">{text}</span>
                        <span class="cursor">|</span>
                        </h2>
                        <p>I am a driven and enthusiastic individual currently pursuing a Bachelor's degree in Information Technology, with a passion for coding and leadership. I am always seeking new opportunities to learn and grow, and I am constantly pushing myself to stay up-to-date with the latest technology trends.
                        </p>
                    <button><a href="#contactMe">Let’s Connect <ArrowRightCircle size={25}></ArrowRightCircle></a> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Player src={"https://assets3.lottiefiles.com/packages/lf20_7VEmrT02fx.json"} background="transparent" speed="1" loop controls autoplay></Player>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}