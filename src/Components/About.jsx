import React from 'react'
import phone from '../Images/phone.png'
import Styles from '../Components/About.module.css'
import { Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className={Styles.container}>
        <div className={`${Styles.image} ${Styles.Box}`}>
          <Zoom>

            <img src={phone}/>
           </Zoom>
        </div>
        <Slide direction='right'>
        <div className={`${Styles.content} ${Styles.Box}`}>
            <h4 className={Styles.title}>ABOUT US</h4>
            <p className={Styles.desc}>P- Dan Technologies is a Tech Company that is dedicated to providing innovative  and customized technology
            solutions for businesses of all sizes.Our team of skilled developers, designers and project manager specialize in creating high-quality web 
            applications, mobile apps and enterprise software that drive business growth and enhance user experience<br></br>
            Contact Us <br></br>
            yeboahd10@gmail.com<br></br>
            +233 55 666 5774<br/>
            Kumasi , Ghana
            </p>
        </div>
        </Slide>
    </section>
  )
}

export default About