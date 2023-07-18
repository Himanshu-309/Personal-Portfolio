import {form } from 'react';
import React  from 'react';
import './contact_me.css'
import { Player } from '@lottiefiles/react-lottie-player';
import  { useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import colorSharp2 from "../assets/img/color-sharp2.png";
import {Canvas} from '@react-three/fiber';
import Cube  from './Cube';
import {OrbitControls, PerspectiveCamera, RenderTexture,Text, Text3D}from '@react-three/drei';
 

const Contact_me = () => {
  const ref = useRef()
  const [success,setSuccess] = useState(null);

  const handleSubmit=e=>{
    e.preventDefault()
    emailjs.sendForm('service_dy6vz7y', 'template_rvxgvxu', ref.current, '_BErrfpVzo4JSLls5')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
  }
  return (
    <div id='contactMe' className='contactSection'>
      <div className='contactContainer'>
        <div className='contactLeft'>
          <form ref={ref} onSubmit={handleSubmit}>
            <h1 style={{color:"#da4ea2"}}>Get In Touch</h1>
            <input placeholder='Name' name='name'/>
            <input placeholder='Email' name='email'/>
            <textarea placeholder='Write Your Message' name='message' rows="5" cols="40"/>
            <button type="submit">Send</button>
            {success && 
            "Your message has been sent. we,ll get back to you soon"}
          </form>
        </div>
        <div className='contactRight'>
          {/* <Player src={"https://assets1.lottiefiles.com/packages/lf20_o9tuy0fs.json"}background="transparent" speed="1" loop controls autoplay></Player> */}

          <Canvas camera={{fov:25,position:[5,5,5]}}>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
              <Cube/>
        </Canvas>

        </div>
      </div>
    </div>
  )
}

export default Contact_me;